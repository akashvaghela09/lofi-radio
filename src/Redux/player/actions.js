import { 
    SET_PLAY_STATUS,
    SET_VOLUME_VALUE,
    SET_PLAY_PROGRESS,
    SET_LOAD_PROGRESS,
    SET_SEEK_VALUE,
    SET_TOTAL_PLAYTIME,
    SET_REMAINING_PLAYTIME,
    SET_PLAY_ITEM,
    SET_PLAYLIST,
    SET_RADIOLIST,
    SET_PLAY_MODE,
    SET_TEMPLATE_USE_STATUS,
    SET_PLAY_ITEM_INDEX,
    SET_CURRENT_PLAYLIST_ID
} from './actionTypes';

const setPlayStatus = (payload) => {
    return {
        type: SET_PLAY_STATUS,
        payload
    }
}

const setVolumeValue = (payload) => {
    return {
        type: SET_VOLUME_VALUE,
        payload
    }
}

const setPlayProgress = (payload) => {
    return {
        type: SET_PLAY_PROGRESS,
        payload
    }
}

const setLoadProgress = (payload) => {
    return {
        type: SET_LOAD_PROGRESS,
        payload
    }
}

const setSeekValue = (payload) => {
    return {
        type: SET_SEEK_VALUE,
        payload
    }
}

const setTotalPlaytime = (payload) => {
    return {
        type: SET_TOTAL_PLAYTIME,
        payload
    }
}

const setRemainingPlaytime = (payload) => {
    return {
        type: SET_REMAINING_PLAYTIME,
        payload
    }
}

const setPlayItem = (payload) => {
    return {
        type: SET_PLAY_ITEM,
        payload
    }
}

const setPlaylist = (payload) => {
    return {
        type: SET_PLAYLIST,
        payload
    }
}

const setRadiolist = (payload) => {
    return {
        type: SET_RADIOLIST,
        payload
    }
}

const setPlayMode = (payload) => {
    return {
        type: SET_PLAY_MODE,
        payload
    }
}

const setTemplateUseStatus = (payload) => {
    return {
        type: SET_TEMPLATE_USE_STATUS,
        payload
    }
}

const setPlayItemIndex = (payload) => {
    return {
        type: SET_PLAY_ITEM_INDEX,
        payload
    }
}

const setCurrentPlaylistId = (payload) => {
    return {
        type: SET_CURRENT_PLAYLIST_ID,
        payload
    }
}

export { 
    setPlayStatus,
    setVolumeValue,
    setPlayProgress,
    setLoadProgress,
    setSeekValue,
    setTotalPlaytime,
    setRemainingPlaytime,
    setPlayItem,
    setPlaylist,
    setRadiolist,
    setPlayMode,
    setTemplateUseStatus,
    setPlayItemIndex,
    setCurrentPlaylistId
}