import { CARS_BIND_CAR, CARS_INIT, CARS_UNBIND_CAR } from "./carsConstants";

export function carsReducer(state = [], action) {
    const stateCopy = [];
    state.forEach((element) => {
        stateCopy.push({ ...element });
    });
    let i;
    switch (action.type) {
        case CARS_INIT:
            return [...action.payload];
        case CARS_BIND_CAR:
            // payload = {carId : integer, activeObjId: integer}
            i = stateCopy.findIndex((x) => x.id === action.payload.id);
            stateCopy[i].belongs = action.payload.objId;
            return stateCopy;
        case CARS_UNBIND_CAR:
            // payload = carId : integer
            i = stateCopy.findIndex((x) => x.id === action.payload);
            stateCopy[i].belongs = null;
            return stateCopy;
        default:
            return state;
    }
}
