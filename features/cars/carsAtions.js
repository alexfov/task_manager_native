import { CARS_BIND_CAR, CARS_INIT, CARS_UNBIND_CAR } from "./carsConstants";

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

export function unbindCar(payload) {
    return {
        type: CARS_UNBIND_CAR,
        payload,
    };
}
