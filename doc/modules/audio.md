# audio
<span class="weex-version">0.10.0</span>

## Summary

`audio` is a series of apis, allowing you to load, play, pause, stop the audio play.

## API

### load(option, callback)

load the audio source. Also to config the behavior of play, such as autoPlay and loop.

#### Arguments

* `src`*(string)*: the source of audio, such as a URL or a local path.  
* `id`*(string)*: option. you can indicate the media play instance by this. If empty, native will generate one, and return it in callback. 
* `autoplay`*(string)*: option. defalut FALSE. auto start play when audio source is downloaded.
* `loop`*(string)*: option. defalut FALSE. do loop play when ended.
* `volume`*(string)*: option. defalut 1.0. set the volume. [0.0, 1.0], 0.0 means mute.


##### Example

```js
var audio = require('@weex-module/audio');
var option = {
          "src": "http://download.alicdn.com/sns/ring1.mp3"
        }
var me = this;
audio.load(option, function(param) {
  // param.id;   you can read the id from callback.
  console.log( JSON.stringify(param) + " @ " + Date.now() );
})
```

### play(id)

Start play audio. 
We allow you to play one or more audio together. so need to control each audio by id.

#### Arguments

* `id`*(string)*:  you specified in option or get from callback in load().

##### Example

```js
var audio = require('@weex-module/audio');
audio.play(id);
```

### pause(id)

pause.

#### Arguments

* `id`*(string)*:  you specified in option or get from callback in load().

##### Example

```js
var audio = require('@weex-module/audio');
audio.pause(id);
```

### stop(id)

stop.

#### Arguments

* `id`*(string)*:  you specified in option or get from callback in load().

##### Example

```js
var audio = require('@weex-module/audio');
audio.stop(id);
```

### String canPlayType(mediaType)

Returns the client can play the audio type or not. It is a sync call.

#### Arguments

* `mediaType`*(string)*: such as audio/wav

#### Returns

* `probably`*(string)*: supported. We make sure the audio can be played on this device.
* `maybe`*(string)*: maybe supported. 
* ``*(string)*: not supported. empty string means not supported.

##### Example

```js
var audio = require('@weex-module/audio');
var isSupported = audio.canPlayType('audio/wav');
```
