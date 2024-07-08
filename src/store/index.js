import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import { authApi } from "./api/auth";
import { productos } from "./api/productos";
import { carts } from "./api/carro";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productos.reducerPath]: productos.reducer,
    [carts.reducerPath]: carts.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware,
      productos.middleware,
      carts.middleware,
    ),
});
