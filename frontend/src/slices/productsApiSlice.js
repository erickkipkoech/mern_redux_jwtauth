import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constants";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    fetchProducts: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}/products`,
        method: "GET",
      }),
    }),
    fetchProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}/product/:id`,
        method: "GET",
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/product/:id`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}/product/:id`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useFetchProductsMutation,
  useFetchProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = usersApiSlice;
