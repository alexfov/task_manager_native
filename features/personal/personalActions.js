import { PERSONAL_BIND_EMPLOYEE, PERSONAL_INIT } from "./personalConstants";

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
