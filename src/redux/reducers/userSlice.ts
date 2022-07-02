import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Location = {
  coords?: GeolocationCoordinates;
  timestamp?: number;
};
interface UserState {
  location: Location;
  loggedIn: boolean;
  unitSystem: string;
  language: string;
}

const initialState: UserState = {
  location: {},
  loggedIn: false,
  unitSystem: "imperial",
  language: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLocation: (state: UserState, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { updateLocation } = userSlice.actions;

export default userSlice.reducer;
