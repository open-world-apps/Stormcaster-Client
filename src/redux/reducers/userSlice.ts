import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Location = {
  coords?: GeolocationCoordinates;
  timestamp?: number;
};
interface UserState {
  location: Location;
  loggedIn: boolean;
}

const initialState: UserState = {
  location: {},
  loggedIn: false,
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
