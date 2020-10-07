import { OBJECTS_ADD, OBJECTS_INIT } from "./objectsConstants.js";

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
