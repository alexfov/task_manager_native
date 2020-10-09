import {
    OBJECTS_ADD,
    OBJECTS_INIT,
    OBJECTS_ADD_EMPLOYEE,
} from "./objectsConstants.js";

export function init(payload) {
    return {
        type: OBJECTS_INIT,
        payload,
    };
}

export function add(payload) {
    return {
        type: OBJECTS_ADD,
        payload,
    };
}

export function addEmployee(payload) {
    return {
        type: OBJECTS_ADD_EMPLOYEE,
        payload,
    };
}
