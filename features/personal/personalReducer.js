export function personalReducer(state = [], action) {
    switch (action.type) {
        case "personal/init":
            return [...action.payload];
        case "personal/addEmpolyee":
            return state;

        default:
            return state;
    }
}
