import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// http://localhost:5173/

// back end URL

const backendURL = 'http://localhost:5000';

interface RegisterUserParams {
   firstName: string;
   email: string;
   password: string;
}
export const registerUser = createAsyncThunk<any, RegisterUserParams, { rejectValue: string }>(
   'auth/register',
   async ({ firstName, email, password }, { rejectWithValue }) => {
      try {
         const config = {
            headers: {
               'Content-Type': 'application/json',
            },
         };
         const response = await axios.post(
            `${backendURL}/api/user/register`,
            { firstName, email, password },
            config,
         );
         localStorage.setItem('userToken', response.data.userToken);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response?.data?.message || error.message);
      }
   },
);
