import {
    TASKS_ADD_OBJECT,
    TASKS_INIT,
    TASKS_SET_ACTIVE_OBJECT,
} from "./tasksConstants";

export function init() {
    return {
        type: TASKS_INIT,
    };
}

export function addObject(payload) {
    return {
        type: TASKS_ADD_OBJECT,
        payload,
    };
}

export function setActiveObject(payload) {
    return {
        type: TASKS_SET_ACTIVE_OBJECT,
        payload,
    };
}
