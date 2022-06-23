import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
   location: object | null;
   loggedIn: boolean;
   unitSystem: string;
}

const initialState: UserState = {
   location: null,
   loggedIn: false,
   unitSystem: 'imperial',
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
});

export default userSlice.reducer;
