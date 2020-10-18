import { OBJECTS_DELETE } from "../objects/objectsConstants";
import {
  PERSONAL_ADD_EMPLOYEE,
  PERSONAL_BIND_EMPLOYEE,
  PERSONAL_DELETE_EMPLOYEE,
  PERSONAL_INIT,
  PERSONAL_UNBIND_EMPLOYEE,
} from "./personalConstants";

export function personalReducer(state = [], action) {
  const stateCopy = [];
  state.forEach((element) => {
    stateCopy.push({ ...element });
  });
  let i;
  switch (action.type) {
    case PERSONAL_INIT:
      return [...action.payload];
    case PERSONAL_BIND_EMPLOYEE:
      // payload = {employeId : integer, activeObjId: integer}
      i = stateCopy.findIndex((x) => x.id === action.payload.id);
      stateCopy[i].belongs = action.payload.objId;
      return stateCopy;
    case PERSONAL_UNBIND_EMPLOYEE:
      // payload = employeId : integer
      i = stateCopy.findIndex((x) => x.id === action.payload);
      stateCopy[i].belongs = null;
      return stateCopy;
    case PERSONAL_ADD_EMPLOYEE:
      // payload = {new user data}
      stateCopy.push(action.payload);
      return stateCopy;
    case PERSONAL_DELETE_EMPLOYEE:
      i = stateCopy.findIndex((x) => x.id === action.payload);
      stateCopy.splice(i, 1);
      return stateCopy;
    case OBJECTS_DELETE:
      // payload = objectId
      stateCopy.forEach((car, i) => {
        if (stateCopy[i].belongs === action.payload)
          stateCopy[i].belongs = null;
      });
      return stateCopy;
    default:
      return state;
  }
}
