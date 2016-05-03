export default function Listener(app) {
  this.app = app
  this.id = app.id
  this.updater = new BatchUpdater()
  this.updateSent = false
  this.batched = false
}

Listener.prototype.createFinish = function () {
    this.addActions([createAction('createFinish', [])]);
}

Listener.prototype.createBody = function (element, ref) {
  const actions = [createAction('createBody', [element.toJSON()])]
  this.addActions(actions)
}

Listener.prototype.addElement = function (element, ref, index) {
  if (!(index >= 0)) {
    index = -1
  }
  this.addActions(createAction('addElement', [ref, element.toJSON(), index]))
}

Listener.prototype.removeElement = function (ref) {
  if (Array.isArray(ref)) {
    const actions = ref.map((r) => createAction('removeElement', [r]))
    this.addActions(actions)
  }
  else {
    this.addActions(createAction('removeElement', [ref]))
  }
}

Listener.prototype.moveElement = function (targetRef, parentRef, index) {
  this.addActions(createAction('moveElement', [targetRef, parentRef, index]))
}

Listener.prototype.setAttr = function (ref, key, value) {
  const result = {}
  result[key] = value
  this.addActions(createAction('updateAttrs', [ref, result]))
}

Listener.prototype.setStyle = function (ref, key, value) {
  const result = {}
  result[key] = value
  this.addActions(createAction('updateStyle', [ref, result]))
}

Listener.prototype.setStyles = function (ref, style) {
  this.addActions(createAction('updateStyle', [ref, style]))
}

Listener.prototype.addEvent = function (ref, type) {
  this.addActions(createAction('addEvent', [ref, type]))
}

Listener.prototype.removeEvent = function (ref, type) {
  this.addActions(createAction('removeEvent', [ref, type]))
}

Listener.prototype.addActions = function (actions) {
  var updater = this.updater;

  if (!Array.isArray(actions)) {
    actions = [actions];
  }

  updater.process(actions);
  if (!this.batched) {
      this.app.submitTasks();
  } else {
      this.sendUpdatedMessageIfNeeded();
  }
}

Listener.prototype.postTasks = function (tasks) {
    if (!this.updater.isEmpty()) {
      tasks.push.apply(tasks, this.updater.toArray());
      this.updater.reset();
    }
};

Listener.prototype.sendUpdatedMessageIfNeeded = function () {
    if (!this.updateSent) {
        this.updateSent = true;
        callNative(this.id, "frameUpdated", '-1');
    }
}

export function createAction(name, args) {
  return {module: 'dom', method: name, args: args}
}

function BatchUpdateArgs() {
    // a ref, other dictionary paired dictionary.
    this.args = {};
}
BatchUpdateArgs.prototype = {
    merge: function (other) {
        var otherRef = other[0];
        var otherDict = other[1];
        var currentDict = this.args[otherRef];
        if (typeof currentDict === "undefined") {
            this.args[otherRef] = otherDict;
        } else {
            for (var key in otherDict) {
                currentDict[key] = otherDict[key];
            }
        }
    },
    applyArray: function(_array, _module, _method) {
        for (var ref in this.args) {
            _array.push({ module: _module, method: _method, args: [ref, this.args[ref]]});
        }
    }
};
function BatchUpdateEntry() {
    // a method, args dict
    this._dict = {};
}
BatchUpdateEntry.prototype = {
    update: function (method, args) {
        var currentArgs;
        currentArgs = this._dict[method];
        if (typeof currentArgs === "undefined") {
            currentArgs = new BatchUpdateArgs();
            this._dict[method] = currentArgs;
        }
        currentArgs.merge(args);
    },
    applyArray: function(_array, _module) {
        for (var _method in this._dict) {
            this._dict[_method].applyArray(_array, _module, _method);
        }
    }
};

function BatchUpdater() {
    // a module, entry dict
    this._dict = {};
    this.empty = true;
    this.addedActions = [];
}

BatchUpdater.prototype = {
    process: function (actions) {
        var this1 = this;
        actions.forEach(function (action) {
            var method = action.method;
            this1.empty = false;
            if (method.startsWith('update')) {
                this1.update(action);
            } else {
                this1.add(action);
            }
        });
    },
    add: function (action) {
        this.addedActions.push(action);
        this.empty = false;
    },
    update: function (action) {
        var currentEntry;
        var module = action.module,
        method = action.method,
        args = action.args;
        currentEntry = this._dict[module];
        if (typeof currentEntry === "undefined") {
            currentEntry = new BatchUpdateEntry();
            this._dict[module] = currentEntry;
        }
        currentEntry.update(method, args);
    },
    toArray: function () {
        var result = [];
        for (var module in this._dict) {
            var entry = this._dict[module];
            entry.applyArray(result, module);
        }
        result.push.apply(result, this.addedActions);
        return result;
    },
    reset: function () {
        this._dict= {};
        this.addedActions = [];
        this.empty = true;
    },
    isEmpty: function () {
        return this.empty;
    },
};
