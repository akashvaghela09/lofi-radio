import { 
    SET_ENDPOINT,
    SET_TEMP_DATA,
    SET_TEMP_API_KEY,
    SET_PLAYLIST_RESULTS,
    SET_PLAYLIST_ITEM_RESULTS
} from './actionTypes';

const setEndPoint = (payload) => {
    return {
        type: SET_ENDPOINT,
        payload
    }
}

const setTempData = (payload) => {
    return {
        type: SET_TEMP_DATA,
        payload
    }
}

const setTempAPIKey = (payload) => {
    return {
        type: SET_TEMP_API_KEY,
        payload
    }
}

const setPlaylistResults = (payload) => {
    return {
        type: SET_PLAYLIST_RESULTS,
        payload
    }
}

const setPlaylistItemResults = (payload) => {
    return {
        type: SET_PLAYLIST_ITEM_RESULTS,
        payload
    }
}


export { 
    setEndPoint,
    setTempData,
    setTempAPIKey,
    setPlaylistResults,
    setPlaylistItemResults
}