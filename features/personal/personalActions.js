import {
    PERSONAL_BIND_EMPLOYEE,
    PERSONAL_INIT,
    PERSONAL_UNBIND_EMPLOYEE,
} from "./personalConstants";

export function init(payload) {
    return {
        type: PERSONAL_INIT,
        payload,
    };
}

export function bindEmployee(payload) {
    return {
        type: PERSONAL_BIND_EMPLOYEE,
        payload,
    };
}

export function unbindEmployee(payload) {
    return {
        type: PERSONAL_UNBIND_EMPLOYEE,
        payload,
    };
}
