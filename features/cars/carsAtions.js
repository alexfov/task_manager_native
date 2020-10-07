import { CARS_INIT } from "./carsConstants";

export function init(payload) {
    return {
        type: CARS_INIT,
        payload,
    };
}
