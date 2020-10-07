import { TASKS_INIT, TASKS_ADD_OBJECT } from "./tasksConstants";

const initialState = {
    isInitialized: false,
    objects: [],
    cars: [],
    personal: [],
    tasks: [],
};

export function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case TASKS_INIT:
            return { ...state, isInitialized: true };
        case TASKS_ADD_OBJECT:
            if (!state.isInitialized) return state;
            return {
                ...state,
                objects: state.objects.concat([action.payload]),
            };

        default:
            return state;
    }
}
