import {
    TASKS_ADD,
    TASKS_INIT,
    TASKS_SET_ACTIVE_OBJECT,
    TASKS_SET_MESSAGE,
} from "./tasksConstants";

export function init() {
    return {
        type: TASKS_INIT,
    };
}

export function setActiveObject(payload) {
    return {
        type: TASKS_SET_ACTIVE_OBJECT,
        payload,
    };
}

export function setMessage(payload) {
    return {
        type: TASKS_SET_MESSAGE,
        payload,
    };
}

export function addTask(payload) {
    return {
        type: TASKS_ADD,
        payload,
    };
}
