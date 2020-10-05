import { combineReducers } from "redux";
import { carsReducer } from "./carsReducer";
import { objectsReducer } from "./objectsReducer";
import { personalReducer } from "../features/personal/personalReducer";

export default rootReducer = combineReducers({
    cars: carsReducer,
    personal: personalReducer,
    objects: objectsReducer,
});
