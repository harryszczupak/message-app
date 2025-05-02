import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// MESSAGE TYPE
type message = {
	id: number;
	message: string;
};

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
	endpoints: (builder) => ({
		//  NOWY ENDPOINT ADD MESSAGE
		addMessage: builder.mutation<void, { message: string }>({
			query: (data) => ({
				url: 'add-message',
				method: 'POST',
				body: data,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		//  NOWY ENDPOINT GET
		getMessages: builder.query<{ messages: message[] }, void>({
			query: () => 'get-messages',
		}),
		//  NOWY ENDPOINT DELETE
		deleteMessage: builder.mutation<void, { id: number }>({
			query: ({ id }) => ({
				url: 'delete-message',
				method: 'POST',
				body: { id },
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		//  NOWY ENDPOINT UPDATE
		updateMessage: builder.mutation<
			void,
			{ id: number; data: { message: string } }
		>({
			query: ({ id, data }) => ({
				url: 'update-message',
				method: 'POST',
				body: { id, data },
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
	}),
});
// EXPORT HOOKS FOR EACH ENDPOINT
export const {
	useAddMessageMutation,
	useGetMessagesQuery,
	useDeleteMessageMutation,
	useUpdateMessageMutation, // <- eksport nowej funkcji hooka
} = api;
