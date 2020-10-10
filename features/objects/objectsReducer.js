import { useSelector } from "react-redux";
import {
    OBJECTS_ADD,
    OBJECTS_INIT,
    OBJECTS_ADD_EMPLOYEE,
} from "./objectsConstants";

export function objectsReducer(state = [], action) {
    switch (action.type) {
        case OBJECTS_INIT:
            return [...action.payload];
        case OBJECTS_ADD:
            return [...state, payload];
        default:
            return state;
    }
}
