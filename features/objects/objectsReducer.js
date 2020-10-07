export function objectsReducer(state = [], action) {
    switch (action.type) {
        case "objects/init":
            return [...action.payload];
        case "objects/add":
            return [...state, payload];

        default:
            return state;
    }
}
