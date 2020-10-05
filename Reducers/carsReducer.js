export function carsReducer(state = [], action) {
    switch (action.type) {
        case "cars/init":
            return state;
        case "cars/addCar":
            return state;

        default:
            return state;
    }
}
