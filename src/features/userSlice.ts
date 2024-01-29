import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IUserData {
  name: string;
  email: string;
  password: any;
  cpassword: any;
}

interface IInitialState {
  userData: IUserData | null;
}

const storedUserData = localStorage.getItem("userData");

const initialState: IInitialState = {
  userData: storedUserData ? JSON.parse(storedUserData) : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.userData;

export default userSlice.reducer;
