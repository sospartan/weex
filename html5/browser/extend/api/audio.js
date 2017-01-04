/* global audio */
'use strict'

const MEDIA_STATUS_READY = 1;
const MEDIA_STATUS_PLAYING= 4;
const MEDIA_STATUS_ENDED = 2;
const MEDIA_STATUS_ERROR = 3;

const playerHolder = {}
var increaseId = 1;

const audio = {

  /**
   * load the audio source
   * @param {object} option
   * @param {function} callback
   */
  load: function (option, callback) {
    if (!window.Audio) {
      sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ERROR,
          value: 'not support audio in this browser'
        });
      return
    }
    if (!option) {
      sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ERROR,
          value: 'empty option'
        });
      return
    }
    if (!option.src) {
      sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ERROR,
          value: 'empty option src'
        });
      return
    }
    if(!option.id) {
      option.id = increaseId;
      increaseId++;
    }

    var player = new Audio();
    player.autoplay = option.autoplay || false;
    player.loop = option.loop || false;
    player.volume = option.volume || 1.0;
    player.src = option.src;

    playerHolder[option.id] = player;

    const sender = this.sender
    player.addEventListener("loadeddata", function()
      {
        sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_READY,
          duration: player.duration
        })
      }
    );
    player.addEventListener("play", function()
      {
        sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_PLAYING,
          duration: player.duration
        })
      }
    );
    player.addEventListener("ended", function()
      {
        sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ENDED
        })
      }
    );

    player.load();
  },

  /**
   * start play
   * @param {string} id
   */
  play: function (id) {
    if (!playerHolder || !playerHolder[id]) {
      console.error('your browser is not support audio yet.')
      return
    }
    var player = playerHolder[id];
    player.play();
  },

  /**
   * pause
   * @param {string} id
   */
  pause: function (id) {
    if (!playerHolder || !playerHolder[id]) {
      console.error('your browser is not support audio yet.')
      return
    }
    var player = playerHolder[id];
    player.pause();
  },

  /**
   * stop
   * @param {string} id
   */
  stop: function (id) {
    if (!playerHolder || !playerHolder[id]) {
      console.error('your browser is not support audio yet.')
      return
    }
    var player = playerHolder[id];
    player.pause();
    player.currentTime = 0;
  },

  /**
   * set all volume of audio
   * @param {string} volume [0.0, 1.0]
   */
  setVolume: function (volume) {
    if (!window.Audio || !playerHolder) {
      console.error('your browser is not support audio yet.')
      return
    }
    if(volume <= 0) {
        volume = 0.01;
    }
    if(volume >= 1) {
      volume = 1;
    }
    for(var id in playerHolder) {
        if(id && playerHolder[id] && playerHolder[id].volume) {
          playerHolder[id].volume = volume;
        }
    }    
  },

  /**
   * this client can play the media type or not.
   * @return 'probably', 'maybe',  ''
   */
  canPlayType: function (mediaType) {
    if (!window.Audio) {
      sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ERROR,
          value: 'not support audio in this browser'
        });
      return
    }
    return new Audio().canPlayType(mediaType);
  }
}

const meta = {
  audio: [{
    name: 'load',
    args: ['object', 'function']
  }, {
    name: 'play',
    args: ['string']
  }, {
    name: 'pause',
    args: ['string']
  },{
    name: 'stop',
    args: ['string']
  },{
    name: 'setVolume',
    args: ['string']
  }, {
    name: 'canPlayType',
    args: ['funcstringtion']
  }]
}

export default {
  init: function (Weex) {
    Weex.registerApiModule('audio', audio, meta)
  }
}
