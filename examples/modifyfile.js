var fs = require('fs');
var fileList = [];

function walk(path) {
    var dirList = fs.readdirSync(path);
    dirList.forEach(function (item) {
        if (fs.statSync(path + '/' + item).isDirectory()) {
            walk(path + '/' + item);
        } else {
            fileList.push(path + '/' + item);
        }
    });
}

walk('syntax');

fileList.forEach(function (item) {
    //addNav(item)
});
function addNav(path) {
    var data = fs.readFileSync(path, "utf-8");
    data = removeJsComments(data);
    var startStr = data.substring(0, data.indexOf('<template>') + '<template>'.length);
    startStr += "\n<playground-navpage>";
    var temp = data.substring(data.indexOf('<template>') + '<template>'.length, data.lastIndexOf('</template>'));


    var start = data.indexOf("<script>");
    var end = data.length;
    if (start >= 0) {
        end = start;
    }
    var endStr = data.substring(data.indexOf('</template>'), end);

    endStr = "</playground-navpage>\n" + endStr;
    var scripttemp = "<script>require('../playground-navpage.we');</script>";
    if (start >= 0) {
        var scriptStart = data.substring(start, start + "<script>".length);
        scriptStart += "\nrequire('../playground-navpage.we');";
        var scriptEnd = data.substring(data.indexOf("<script>") + "<script>".length);
        scripttemp = scriptStart + scriptEnd;
    }
    var content = startStr + temp + endStr + scripttemp;
    fs.writeFileSync(path, content, "UTF-8");
}

function removeJsComments(data) {
    if (data.indexOf("<!--") < 0) {
        return data;
    }
    var temp = data.substring(data.indexOf("<!--"), data.indexOf("-->") + "-->".length);
    var start = data.substring(0, data.indexOf(temp));
    var end = data.substring(data.indexOf(temp) + temp.length, data.length);
    end = removeJsComments(end);
    return start + end;
}

var items = [
    {name: 'style/index', title: 'Common Style'},
    {name: 'animation', title: 'Animation'},
]

items.forEach(function (item) {
    console.log(item.name);
    addNav(item.name + ".we");
});

