import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCookie } from "../../../utils";
export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: "POST",
        body: data,
      }),

      transformResponse(baseQueryReturnValue) {
        setCookie("token", baseQueryReturnValue.token, 30);
      },
    }),
  }),
});
export const { useLoginUserMutation } = authApi;
