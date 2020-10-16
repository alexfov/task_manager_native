import {
    TASKS_ADD,
    TASKS_INIT,
    TASKS_SET_ACTIVE_OBJECT,
    TASKS_SET_MESSAGE,
} from "./tasksConstants";

const initialState = {
    isInitialized: false,
    activeObject: null,
    message: "",
    tasks: {},
};

export function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case TASKS_INIT:
            return { ...state, isInitialized: true };
        case TASKS_SET_ACTIVE_OBJECT:
            if (!state.isInitialized) return state;
            return {
                ...state,
                activeObject: action.payload,
            };
        case TASKS_SET_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        case TASKS_ADD:
            const newState = { ...state, tasks: { ...state.tasks } };
            newState.tasks[action.payload.id] = action.payload.task;
            return newState;
        default:
            return state;
    }
}
