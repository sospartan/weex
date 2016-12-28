package com.taobao.weex.appfram.audio;

import android.media.MediaPlayer;
import android.net.Uri;
import android.support.annotation.Nullable;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.Destroyable;
import com.taobao.weex.common.WXModule;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by xj on 16/12/27.
 */

public class WXAudioModule extends WXModule implements IWXAudio, Destroyable {

    private AtomicLong generateId = new AtomicLong(1);
    private Map<Long, Map<String, String>> optionsMap = new HashMap<>();
    private Map<Long, MediaPlayer> playerMap = new WeakHashMap<>();
    private Map<String, List<Long>> instancePlayerIdMap = new HashMap<>(); // save the instanceId vs player mapping

    private Map<Long, Integer> statusMap = new ConcurrentHashMap<>();
    private List<Long> autoStartPlayWhenReady = new ArrayList<>();
    private Map<Long, JSCallback> callbackMap = new HashMap<>();

    @JSMethod(uiThread = false)
    @Override
    public String canPlayType(String mediaType) {
        if("audio/wav".equalsIgnoreCase(mediaType) || "audio/x-wav".equalsIgnoreCase(mediaType)) {
            return IWXAudio.CAN_PLAY_TYPE_PROBABLY; // .wav
        }else if("audio/mp3".equalsIgnoreCase(mediaType)) {
            return IWXAudio.CAN_PLAY_TYPE_PROBABLY; // .mp3 .mpg .mpeg
        }else if("audio/aac".equalsIgnoreCase(mediaType) || "audio/mp4".equalsIgnoreCase(mediaType)) {
            return IWXAudio.CAN_PLAY_TYPE_PROBABLY; // .aac .m4a .mp4
        }

        return IWXAudio.CAN_PLAY_TYPE_MAYBE;
    }

    @Override
    public void load(Map<String, String> options, @Nullable JSCallback statusCallback) {
        long id = -1L;
        Map<String, Object> map = new HashMap<>(3);
        if(null == options) {
            map.put(IWXAudio.KEY_ID, String.valueOf(generateId.incrementAndGet()));
            map.put(IWXAudio.KEY_STATUS, IWXAudio.MEDIA_STATUS_ERROR);
            map.put(IWXAudio.KEY_VALUE, "empty option");
            statusCallback.invoke(map);
            return;
        }

        if(null == options.get(IWXAudio.KEY_ID)) {
            id = generateId.incrementAndGet();
        }else {
            id = Long.parseLong(options.get(IWXAudio.KEY_ID));
        }
        map.put(IWXAudio.KEY_ID, String.valueOf(id));

        if(null == options.get(IWXAudio.KEY_URL)) {
            map.put(IWXAudio.KEY_STATUS, IWXAudio.MEDIA_STATUS_ERROR);
            map.put(IWXAudio.KEY_VALUE, "empty option url");
            statusCallback.invoke(map);
            return;
        }
        Uri uri = Uri.parse(options.get(IWXAudio.KEY_URL));
        if(uri.isHierarchical()) {
            map.put(IWXAudio.KEY_STATUS, IWXAudio.MEDIA_STATUS_ERROR);
            map.put(IWXAudio.KEY_VALUE, "not a vaild url");
            statusCallback.invoke(map);
            return;
        }

        addPlayerIdByInstanceId(mWXSDKInstance.getInstanceId(), id);
        optionsMap.put(id, options);
        changeStatus(id, IWXAudio.MEDIA_STATUS_INIT);
        MediaPlayer player = getPlayer(id);
        try {
            // init
            player.reset();
            player.setDataSource(mWXSDKInstance.getContext(), uri);
            player.setOnCompletionListener(mCompletionListener);
            player.setOnErrorListener(mErrorListener);
            player.setOnPreparedListener(mPreparedListener);

            // prepare
            player.prepareAsync();
            changeStatus(id, IWXAudio.MEDIA_STATUS_READY);

        } catch (Exception e) {
            e.printStackTrace();
            changeStatus(id, IWXAudio.MEDIA_STATUS_ERROR);
            invokeCallbackAndKeepAlive(generateCallbackValue(id, IWXAudio.MEDIA_STATUS_ERROR, ""));
        }
    }

    private Map<String, Object> generateCallbackValue(Long id, Integer status, Object value) {
        Map<String, Object> map = new HashMap<>(3);
        map.put(IWXAudio.KEY_ID, id);
        map.put(IWXAudio.KEY_STATUS, status);
        map.put(IWXAudio.KEY_VALUE, value);
        return map;
    }

    WXAudioOnCompletionListener mCompletionListener = new WXAudioOnCompletionListener();
    private class WXAudioOnCompletionListener implements MediaPlayer.OnCompletionListener {

        @Override
        public void onCompletion(MediaPlayer mp) {
            long id = getIdByPlayer(mp);
            changeStatus(id, IWXAudio.MEDIA_STATUS_ENDED);

            invokeCallbackAndKeepAlive(generateCallbackValue(id, IWXAudio.MEDIA_STATUS_ENDED, ""));
        }
    }

    WXAudioOnErrorListener mErrorListener = new WXAudioOnErrorListener();
    private class WXAudioOnErrorListener implements MediaPlayer.OnErrorListener {

        @Override
        public boolean onError(MediaPlayer mp, int what, int extra) {
            long id = getIdByPlayer(mp);
            changeStatus(id, IWXAudio.MEDIA_STATUS_ERROR);

            invokeCallbackAndKeepAlive(generateCallbackValue(id, IWXAudio.MEDIA_STATUS_ERROR, ""));
            return true;
        }
    }

    WXAudioOnPreparedListener mPreparedListener = new WXAudioOnPreparedListener();
    private class WXAudioOnPreparedListener implements MediaPlayer.OnPreparedListener {

        @Override
        public void onPrepared(MediaPlayer mp) {
            Long id = getIdByPlayer(mp);
            changeStatus(id, IWXAudio.MEDIA_STATUS_READY);

            Map<String, Object> callback = generateCallbackValue(id, IWXAudio.MEDIA_STATUS_READY, "");
            if(autoStartPlayWhenReady.size() > 0 && autoStartPlayWhenReady.contains(id)) {
                mp.start();
                callback.put(IWXAudio.KEY_STATUS, IWXAudio.MEDIA_STATUS_PLAYING);
                autoStartPlayWhenReady.remove(id);
            }

            invokeCallbackAndKeepAlive(callback);
        }
    }

    private void changeStatus(Long id, int status) {
        statusMap.put(id, status);
    }

    private void changeStatus(MediaPlayer mp, int status) {
        long id = getIdByPlayer(mp);
        changeStatus(id, status);
    }

    private void invokeCallbackAndKeepAlive(Map<String, Object> callback) {
        if(null == callback.get(IWXAudio.KEY_ID)) {
            return;
        }
        Long id = (Long) callback.get(IWXAudio.KEY_ID);
        JSCallback cb = callbackMap.get(id);
        if(null != cb) {
            cb.invokeAndKeepAlive(callback);
        }
    }

    private MediaPlayer getPlayer(Long id) {
        MediaPlayer p = playerMap.get(id);
        if(null == p) {
            p = new MediaPlayer();
            playerMap.put(id, p);
        }
        return p;
    }

    private Long getIdByPlayer(MediaPlayer player) {
        for(Map.Entry<Long, MediaPlayer> one : playerMap.entrySet()) {
            if(one.getValue() == player) {
                return one.getKey();
            }
        }
        return -1L;
    }

    private void addPlayerIdByInstanceId(String instanceId, long id) {
        List<Long> playerIds = instancePlayerIdMap.get(instanceId);
        if(null == playerIds) {
            playerIds = new ArrayList<>();
            instancePlayerIdMap.put(instanceId, playerIds);
        }
        playerIds.add(id);
    }

    @Override
    public void play(Long id) {
        if(null == id) {
            return;
        }
        if(null == playerMap.get(id)) {
            return;
        }

        MediaPlayer player = getPlayer(id);
        if(IWXAudio.MEDIA_STATUS_READY == statusMap.get(id)
                || IWXAudio.MEDIA_STATUS_PAUSE == statusMap.get(id)) {
            player.start();
            changeStatus(id, IWXAudio.MEDIA_STATUS_PLAYING);
        }else if(IWXAudio.MEDIA_STATUS_PLAYING == statusMap.get(id)
                || IWXAudio.MEDIA_STATUS_ENDED == statusMap.get(id)) {
            player.stop();
            player.seekTo(0);
            player.start();
            changeStatus(id, IWXAudio.MEDIA_STATUS_PLAYING);
        }else if(IWXAudio.MEDIA_STATUS_INIT == statusMap.get(id)) {
            autoStartPlayWhenReady.add(id);
        }
    }

    @Override
    public void pause(Long id) {
        if(null == id) {
            return;
        }
        if(null == playerMap.get(id)) {
            return;
        }

        MediaPlayer player = getPlayer(id);
        player.pause();
        changeStatus(id, IWXAudio.MEDIA_STATUS_PAUSE);
    }

    @Override
    public void stop(Long id) {
        if(null == id) {
            return;
        }
        if(null == playerMap.get(id)) {
            return;
        }

        MediaPlayer player = getPlayer(id);
        player.stop();
        player.seekTo(0);
        changeStatus(id, IWXAudio.MEDIA_STATUS_READY);
    }

    @Override
    public void setVolume(float volume) {
        List<Long> playerIds = instancePlayerIdMap.get(mWXSDKInstance.getInstanceId());
        if(null == playerIds) {
            return;
        }

        for(Long id : playerIds) {
            MediaPlayer mp = playerMap.get(id);
            if(null != mp) {
                mp.setVolume(volume, volume);
            }
        }
    }

    @Override
    public void destroy() {
        List<Long> playerIds = instancePlayerIdMap.get(mWXSDKInstance.getInstanceId());
        if(null != playerIds) {
            // when close page, remove the player
            for(Long id : playerIds) {
                optionsMap.remove(id);
                statusMap.remove(id);
                playerMap.remove(id);
                callbackMap.remove(id);
            }
        }

    }
}
