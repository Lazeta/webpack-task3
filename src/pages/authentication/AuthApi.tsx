import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://dummyjson.com/auth/login";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/user",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = authApi;
