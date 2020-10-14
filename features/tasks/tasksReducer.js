import {
    TASKS_INIT,
    TASKS_ADD_OBJECT,
    TASKS_SET_ACTIVE_OBJECT,
    TASKS_SET_MESSAGE,
} from "./tasksConstants";

const initialState = {
    isInitialized: false,
    activeObject: null,
    message: "",
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
        case TASKS_SET_ACTIVE_OBJECT:
            if (!state.isInitialized) return state;
            return {
                ...state,
                activeObject: action.payload,
            };
        case TASKS_SET_MESSAGE:
            if (!state.isInitialized) return state;
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
}
