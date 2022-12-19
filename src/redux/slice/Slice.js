import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import type { Contacts } from './types'

export const contactApi = createApi({
  providesTags: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://639f2b765eb8889197f61ebc.mockapi.io/',
  }),
  reducerPath: 'contactsApi',

  endpoints: build => ({
    getContacts: build.query({
      query: () => `Contacts`,
      providesTags: ['Contacts'],
    }),

    addContacts: build.mutation({
      query: contact => ({
        url: `Contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    updateContactbyId: build.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),

    deleteContacts: build.mutation({
      query: id => ({
        url: `Contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// console.log(contactApi);
export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactApi;

// import { createSlice } from '@reduxjs/toolkit';

// const contactList = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const Slice = createSlice({
//   name: 'contacts',
//   initialState: { value: contactList, filter: '' },
//   reducers: {
//     addContact(state, action) {
//       state.value.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return {
//         ...state,
//         value: state.value.filter(({ id }) => id !== action.payload),
//       };
//     },
//     setFilter(state, action) {
//       return { ...state, filter: action.payload };
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter } = Slice.actions;
// export default Slice.reducer;
