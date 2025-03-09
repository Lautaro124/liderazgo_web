import { IUser } from "@/interface/user.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  id: 0,
  fullName: "",
  email: "",
  password: "",
  role: "",
  ocupation: "",
  birthdate: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
