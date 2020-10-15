import { useSelector } from "react-redux";
import {
    OBJECTS_ADD,
    OBJECTS_INIT,
    OBJECTS_ADD_EMPLOYEE,
    OBJECTS_DELETE,
} from "./objectsConstants";

export function objectsReducer(state = [], action) {
    const stateCopy = [];
    state.forEach((object) => {
        stateCopy.push({ ...object });
    });
    switch (action.type) {
        case OBJECTS_INIT:
            return [...action.payload];
        case OBJECTS_ADD:
            stateCopy.push(action.payload);
            return stateCopy;
        case OBJECTS_DELETE:
            const i = stateCopy.findIndex((obj) => obj.id === action.payload);
            stateCopy.splice(i, 1);
            return stateCopy;
        default:
            return state;
    }
}
