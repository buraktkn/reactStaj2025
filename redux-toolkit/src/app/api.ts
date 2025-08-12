import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com"
export type User ={
    id: number,
    name: string
}
export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: ()=> "/users",
        }),
    }),
});


export const {useGetUsersQuery} = usersApi;