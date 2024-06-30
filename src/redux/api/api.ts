import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoint: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/tasks',
                method: 'GET',
            }),
        }),
        addTodo: builder.muatation({
            query: (data) => ({
                console.log("inside base api", data);
                return {
                    url: '/tasks',
                    method: 'POST',
                    body: data
                }
            })
        })
    })
})
export const { useGetTodosQuery } = baseApi;






