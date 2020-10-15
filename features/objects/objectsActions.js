import {
    OBJECTS_ADD,
    OBJECTS_INIT,
    OBJECTS_DELETE,
} from "./objectsConstants.js";

export function init(payload) {
    return {
        type: OBJECTS_INIT,
        payload,
    };
}

export function addObject(payload) {
    return {
        type: OBJECTS_ADD,
        payload,
    };
}

export function deleteObject(payload) {
    return {
        type: OBJECTS_DELETE,
        payload,
    };
}
