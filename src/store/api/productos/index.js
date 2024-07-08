import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../../../utils";
 export const productos= createApi({

     reducerPath: "products",
     baseQuery: fetchBaseQuery({
       baseUrl: import.meta.env.VITE_BASE_URL,
       headers: {
         "Content-Type": "application/json",
       },
     }),
     endpoints: (build) => ({
       getProductos: build.query({
        query: () => ({
            url: `products`,
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`,
            }
        })
       }),

       getProductoById: build.query({
        query: (id) => ({
            url: `products/${id}`,
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`,
            }
        })
       }),
     }),



   });

   export const { useGetProductosQuery ,useGetProductoByIdQuery} = productos;
