// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { SignUpFormData } from "../../types/Auth/authTypes";

// interface AuthState {
//   signUpData: SignUpFormData | null;
//   isLoggedIn: boolean;
// }

// const initialState: AuthState = {
//   signUpData: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setSignUpData: (state, action: PayloadAction<SignUpFormData>) => {
//       state.signUpData = action.payload;
//     },
//     loginUser: (state) => {
//       state.isLoggedIn = true;
//     },
//     logoutUser: (state) => {
//       state.isLoggedIn = false;
//     },
//     updateUserProfile: (
//       state,
//       action: PayloadAction<Partial<SignUpFormData>>
//     ) => {
//       if (state.signUpData) {
//         state.signUpData = {
//           ...state.signUpData,
//           ...action.payload,
//         };
//       }
//     },
//   },
// });

// export const { setSignUpData, loginUser, logoutUser, updateUserProfile } =
//   authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SignUpDataToStore } from "../../types/Auth/authTypes"; // ✅ updated type

interface AuthState {
  signUpData: SignUpDataToStore | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  signUpData: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignUpData: (state, action: PayloadAction<SignUpDataToStore>) => {
      state.signUpData = action.payload;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    updateUserProfile: (
      state,
      action: PayloadAction<Partial<SignUpDataToStore>>
    ) => {
      if (state.signUpData) {
        state.signUpData = {
          ...state.signUpData,
          ...action.payload,
        };
      }
    },
  },
});

export const { setSignUpData, loginUser, logoutUser, updateUserProfile } =
  authSlice.actions;

export default authSlice.reducer;
