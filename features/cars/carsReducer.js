export function carsReducer(state = [], action) {
    switch (action.type) {
        case "cars/init":
            return [...action.payload];
        case "cars/add":
            return state;

        default:
            return state;
    }
}
