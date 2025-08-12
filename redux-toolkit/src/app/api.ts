import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com"
export type User ={
    id: number,
    name: string
}
export type Todo ={
    id: number,
    title: string,
}
export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: ()=> "/users",
        }),
        getTodos: builder.query<Todo[], void>({
            query: ()=> "/todos",
        }),
    }),
});


export const {useGetUsersQuery, useGetTodosQuery} = usersApi;
