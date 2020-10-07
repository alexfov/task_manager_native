import { TASKS_ADD_OBJECT, TASKS_INIT } from "./tasksConstants";

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
