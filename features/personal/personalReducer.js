import {
    PERSONAL_BIND_EMPLOYEE,
    PERSONAL_INIT,
    PERSONAL_UNBIND_EMPLOYEE,
} from "./personalConstants";

export function personalReducer(state = [], action) {
    const stateCopy = [];
    state.forEach((element) => {
        stateCopy.push({ ...element });
    });
    let i;
    switch (action.type) {
        case PERSONAL_INIT:
            return [...action.payload];
        case PERSONAL_BIND_EMPLOYEE:
            // payload = {employeId : integer, activeObjId: integer}
            i = stateCopy.findIndex((x) => x.id === action.payload.id);
            stateCopy[i].belongs = action.payload.objId;
            return stateCopy;
        case PERSONAL_UNBIND_EMPLOYEE:
            // payload = employeId : integer
            i = stateCopy.findIndex((x) => x.id === action.payload);
            stateCopy[i].belongs = null;
            return stateCopy;
        default:
            return state;
    }
}
