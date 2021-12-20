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
    SET_URL_LIST
} from './actionTypes';

const initialState = {
    play_status: false,
    volume_value: 1,
    play_progress: 0,
    load_progress: 0,
    seek_value: 0,
    total_playtime: 0,
    remaining_playtime: 0,
    play_item: { "radioName": "", "channelTitle": "", "channel_url": "", "thumbnails": {"medium": {"url": ""}, "maxres": {"url": ""}}, "title": "", "video_url": ""},
    playlist: [],
    radiolist: [],
    play_mode: "radio",
    template_use_status: false,
    urlList: []
}

const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case SET_PLAY_STATUS:
            return {
                ...state,
                play_status: payload
            }
        case SET_VOLUME_VALUE:
            return {
                ...state,
                volume_value: payload
            }
        case SET_PLAY_PROGRESS:
            return {
                ...state,
                play_progress: payload
            }
        case SET_LOAD_PROGRESS:
            return {
                ...state,
                load_progress: payload
            }
        case SET_SEEK_VALUE:
            return {
                ...state,
                seek_value: payload
            }
        case SET_TOTAL_PLAYTIME:
            return {
                ...state,
                total_playtime: payload
            }
        case SET_REMAINING_PLAYTIME:
            return {
                ...state,
                remaining_playtime: payload
            }
        case SET_PLAY_ITEM:
            return {
                ...state,
                play_item: payload
            }
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: payload
            }
        case SET_RADIOLIST:
            return {
                ...state,
                radiolist: payload
            }
        case SET_PLAY_MODE:
            return {
                ...state,
                play_mode: payload
            }
        case SET_TEMPLATE_USE_STATUS:
            return {
                ...state,
                template_use_status: payload
            }
        case SET_URL_LIST:
            return {
                ...state,
                urlList: payload
            }
        default:
            return state
    }
}

export {reducer}