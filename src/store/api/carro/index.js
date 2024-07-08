import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../../../utils";
export const carts = createApi({
  reducerPath: "carts'",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    getCars: build.query({
      query: () => ({
        url: `carts`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),

    addCart: build.mutation({
      query: () => ({
        url: `carts`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),

    deleteCart: build.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }),
    }),
  }),
});

export const { useAddCartMutation, useGetCarsQuery, useDeleteCartMutation } =
  carts;
