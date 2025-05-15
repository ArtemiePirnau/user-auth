import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser } from './authRegisterActions';
import { userLogin } from './authLoginActions';

interface AuthState {
   loading: boolean;
   userInfo: Record<string, any> | null;
   userToken: string | null;
   error: string | boolean | null;
   success: boolean;
}

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState: AuthState = {
   loading: false,
   userInfo: {},
   userToken,
   error: null,
   success: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         localStorage.removeItem('userToken');
         state.loading = false;
         state.userInfo = null;
         state.userToken = null;
         state.error = null;
      },
      setCredentials: (state, { payload }) => {
         state.userInfo = payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(registerUser.pending, (state) => {
            (state.loading = true), (state.error = false);
         })
         .addCase(registerUser.fulfilled, (state, { payload }) => {
            (state.loading = false),
               (state.success = true),
               (state.userInfo = payload), // register successfully
               (state.userToken = payload.userToken);
         })
         .addCase(registerUser.rejected, (state, action: PayloadAction<string | undefined>) => {
            (state.loading = false), (state.error = action.payload || 'Register Failed');
         });
      builder
         .addCase(userLogin.pending, (state) => {
            (state.loading = true), (state.error = false);
         })
         .addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload;
            state.userToken = payload.userToken;
         })
         .addCase(userLogin.rejected, (state, action: PayloadAction<string | undefined>) => {
            (state.loading = true), (state.error = action.payload || 'Register Failed');
         });
   },
});
export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
