export function objectsReducer(state = [], action) {
    switch (action.type) {
        case "object/init":
            return state;
        case "object/addObject":
            return state;

        default:
            return state;
    }
}
