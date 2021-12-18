import { 
    SET_ENDPOINT,
    SET_TEMP_DATA,
    SET_TEMP_API_KEY
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


export { 
    setEndPoint,
    setTempData,
    setTempAPIKey
}