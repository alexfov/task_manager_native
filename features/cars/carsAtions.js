import { CARS_BIND_CAR, CARS_INIT } from "./carsConstants";

export function init(payload) {
    return {
        type: CARS_INIT,
        payload,
    };
}

export function bindCar(payload) {
    return {
        type: CARS_BIND_CAR,
        payload,
    };
}
