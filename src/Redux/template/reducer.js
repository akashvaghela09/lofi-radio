import { 
    SET_ENDPOINT,
    SET_TEMP_DATA,
    SET_TEMP_API_KEY
} from './actionTypes';

const initialState = {
    endPoint: "Channel",
    tempData: [],
    tempKey: "",
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
        default:
            return state
    }
}

export {reducer}