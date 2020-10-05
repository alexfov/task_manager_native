import { PERSONAL_INIT } from "./personalConstants";

export function init(payload) {
    return {
        type: PERSONAL_INIT,
        payload,
    };
}
