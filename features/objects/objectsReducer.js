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
        // case OBJECTS_ADD_EMPLOYEE:
        //     const i = stateCopy.findIndex(
        //         (x) => x.id === action.payload.activeObj
        //     );
        //     stateCopy[i].personal = new Set(stateCopy[i].personal).add(
        //         action.payload.id
        //     );
        //     console.log(stateCopy);
        //     return stateCopy;
        default:
            return state;
    }
}
