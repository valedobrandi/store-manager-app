import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    fetchData: builder.query<void, string>({
      query: (query) => query,
    }),
  }),
});

export const {
  useLazyFetchDataQuery,
  useFetchDataQuery,
} = apiSlice;
