export function personalReducer(state = [], action) {
    switch (action.type) {
        case "personal/init":
            return [...action.payload];
        case "personal/add":
            return state;

        default:
            return state;
    }
}
