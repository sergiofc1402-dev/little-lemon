import { fetchAPI } from "../api";


export function initializeTimes(){
    const today = new Date();
    return fetchAPI(today);
}

export function updateTimes(state, action) {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate);
}