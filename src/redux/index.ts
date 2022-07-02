export { store } from "./app/store";
export { useAppSelector, useAppDispatch } from "./app/hooks";
export { updateLocation } from "./reducers/userSlice";
export {
  incrementTempAmount,
  decrementTempAmount,
} from "./reducers/weatherSlice";
export { default as weatherReducer } from "./reducers/weatherSlice";
export { default as userReducer } from "./reducers/userSlice";
export { default as navReducer } from "./reducers/navSlice";
