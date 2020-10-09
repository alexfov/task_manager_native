import { CARS_BIND_CAR, CARS_INIT } from "./carsConstants";

export function carsReducer(state = [], action) {
    switch (action.type) {
        case CARS_INIT:
            return [...action.payload];
        case CARS_BIND_CAR:
            const stateCopy = [];
            state.forEach((element) => {
                stateCopy.push({ ...element });
            });
            const i = stateCopy.findIndex((x) => x.id === action.payload.id);
            stateCopy[i].belongs = action.payload.objId;
            return stateCopy;
        default:
            return state;
    }
}
