/* global audio */
'use strict'

const MEDIA_STATUS_INIT = 1;
const MEDIA_STATUS_READY = 2;
const MEDIA_STATUS_PLAYING= 3;
const MEDIA_STATUS_PAUSE = 4;
const MEDIA_STATUS_ENDED = 5;
const MEDIA_STATUS_ERROR = 6;

const MEDIA_ERR_ABORTED = "1";
const MEDIA_ERR_NETWORK = "2";
const MEDIA_ERR_DECODE = "3";
const MEDIA_ERR_SRC_NOT_SUPPORTED = "4";
const MEDIA_ERR_OTHER = "5";

const playerHolder = {}
var increaseId = 1;
var cb;

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
          value: {
             code: MEDIA_ERR_OTHER,
             message: 'not support audio in this browser'
          }
        }, false);
      return
    }
    if (!option) {
      sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ERROR,
          value: {
             code: MEDIA_ERR_SRC_NOT_SUPPORTED,
             message: 'empty option'
          }
        }, false);
      return
    }
    if (!option.src) {
      sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ERROR,
          value: {
             code: MEDIA_ERR_SRC_NOT_SUPPORTED,
             message: 'empty option src'
          }
        }, false);
      return
    }
    if(!option.id) {
      option.id = increaseId;
      increaseId++;
    }

    if(playerHolder[option.id]) {
      playerHolder[option.id].pause(); // one id means one active audio
    }

    var player = new Audio();
    player.autoplay = option.autoplay || false;
    player.loop = option.loop || false;
    player.volume = option.volume || 1.0;
    player.src = option.src;

    playerHolder[option.id] = player;
    cb = callback;

    const sender = this.sender
    sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_INIT
        }, true)

    player.addEventListener("loadeddata", function()
      {
        sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_READY,
          value : {
            duration: player.duration
          }
        }, true)
      }
    );
    player.addEventListener("play", function()
      {
        sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_PLAYING
        }, true)
      }
    );
    // player.addEventListener("pause", function()
    //   {
    //     sender.performCallback(callback, {
    //       id: option.id,
    //       status: MEDIA_STATUS_PAUSE
    //     }, true)
    //   }
    // );
    player.addEventListener("ended", function()
      {
        sender.performCallback(callback, {
          id: option.id,
          status: MEDIA_STATUS_ENDED
        }, true)
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

    if(cb) {
      this.sender.performCallback(cb, {
            id: id,
            status: MEDIA_STATUS_PAUSE
          }, true);
    }
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

    if(cb) {
      this.sender.performCallback(cb, {
            id: id,
            status: MEDIA_STATUS_ENDED
          }, true);
    }
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
          value: {
             code: MEDIA_ERR_OTHER,
             message: 'empty option'
          }
        }, false);
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
    args: ['string']
  }]
}

export default {
  init: function (Weex) {
    Weex.registerApiModule('audio', audio, meta)
  }
}
