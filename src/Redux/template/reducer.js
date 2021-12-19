import { 
    SET_ENDPOINT,
    SET_TEMP_DATA,
    SET_TEMP_API_KEY,
    SET_PLAYLIST_RESULTS
} from './actionTypes';

const initialState = {
    endPoint: "",
    tempData: [],
    tempKey: "",
    playlistResults: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_ENDPOINT:
            return {
                ...state,
                endPoint: payload
            }
        case SET_TEMP_DATA:
            return {
                ...state,
                tempData: payload
            }
        case SET_TEMP_API_KEY:
            return {
                ...state,
                tempKey: payload
            }
        case SET_PLAYLIST_RESULTS:
            return {
                ...state,
                playlistResults: payload
            }
        default:
            return state
    }
}

export {reducer}