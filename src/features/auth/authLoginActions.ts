import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//const backendURL = 'http://localhost:5173';
const backendURL = 'http://localhost:5000';

export interface LogInParams {
   email: string;
   password: string;
}

interface User {
   id: string;
   email: string;
   name: string;
}

interface UserResponse {
   userToken: string;
   user: User;
}

export const userLogin = createAsyncThunk<UserResponse, LogInParams, { rejectValue: string }>(
   'auth/login',
   async ({ email, password }, { rejectWithValue }) => {
      try {
         const config = {
            headers: { 'Content-Type': 'application/json' },
         };

         console.log('Sending request to:', `${backendURL}/api/user/login`);
         console.log('Payload:', { email, password });

         const { data } = await axios.post<UserResponse>(
            `${backendURL}/api/user/login`,
            { email, password },
            config,
         );
         console.log('Response received:', data);
         localStorage.setItem('userToken', data.userToken);
         //TODO: Posibil ca asa avem nevoie s a fac si asta in register
         localStorage.setItem('userInfo', JSON.stringify(data.user));
         return data;
      } catch (error: any) {
         console.error('Error during request:', error);

         if (axios.isAxiosError(error) && error.response?.data?.message) {
            return rejectWithValue(error.response.data.message);
         }
         return rejectWithValue((error as Error).message || 'An unknown error occurred');
      }
   },
);
