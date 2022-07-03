import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const phonebookApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62c16408eff7f7856f0d7888.mockapi.io/",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ["Contacts"],
    }),
    deleteContactById: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    postContact: builder.mutation({
      query: (contact) => ({
        url: "contacts/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

const {
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
} = phonebookApi;

export {
  phonebookApi,
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
};