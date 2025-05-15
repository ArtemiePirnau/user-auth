import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface AuthState {
   userToken: string | null;
}

export interface GetUserDetailsResponse {
   id: string;
   firstName: string;
   email: string;
   password: string;
}

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://127.0.0.1:5000/',
      prepareHeaders: (headers, { getState }) => {
         const token = (getState() as { auth: AuthState }).auth.userToken;

         if (token) {
            headers.set('authorization', `Bearer ${token}`);
         }
         return headers;
      },
   }),
   endpoints: (builder) => ({
      getUserDetails: builder.query<GetUserDetailsResponse, void>({
         query: () => ({
            url: 'api/user/profile',
            method: 'GET',
         }),
      }),
   }),
});
export const { useGetUserDetailsQuery } = authApi;
