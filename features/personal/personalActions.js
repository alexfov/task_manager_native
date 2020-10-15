import {
    PERSONAL_ADD_EMPLOYEE,
    PERSONAL_BIND_EMPLOYEE,
    PERSONAL_DELETE_EMPLOYEE,
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

export function addEmployee(payload) {
    return {
        type: PERSONAL_ADD_EMPLOYEE,
        payload,
    };
}

export function deleteEmployee(payload) {
    return {
        type: PERSONAL_DELETE_EMPLOYEE,
        payload,
    };
}
