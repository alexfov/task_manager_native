import { PERSONAL_BIND_EMPLOYEE, PERSONAL_INIT } from "./personalConstants";

export function personalReducer(state = [], action) {
    switch (action.type) {
        case PERSONAL_INIT:
            return [...action.payload];
        case PERSONAL_BIND_EMPLOYEE:
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
