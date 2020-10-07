import { combineReducers } from "redux";
import { carsReducer } from "../features/cars/carsReducer";
import { objectsReducer } from "../features/objects/objectsReducer";
import { personalReducer } from "../features/personal/personalReducer";
import { tasksReducer } from "../features/tasks/tasksReducer";

export default rootReducer = combineReducers({
    cars: carsReducer,
    personal: personalReducer,
    objects: objectsReducer,
    tasks: tasksReducer,
});
