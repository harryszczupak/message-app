'use client';
import React, { FormEvent } from 'react';
import { useGetMessagesQuery } from '../store/apiSlice';
import { FullscreenLoader } from '@/components/ui/FullScreenLoader';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useDeleteMessageMutation } from '../store/apiSlice';
const MessagesList = () => {
	const [deleteMessage, { isLoading: isDeleting }] = useDeleteMessageMutation();
	const { data, error, isLoading, refetch } = useGetMessagesQuery(undefined, {
		refetchOnMountOrArgChange: true,
	});
	if (isLoading) {
		return <FullscreenLoader text='Downloading' />;
	}

	if (error) {
		return (
			<div className='flex flex-1 w-full justify-center items-center'>
				<h1>Error loading messages</h1>
			</div>
		);
	}
	const handleDelete = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const id = Number(formData.get('id'));

		await deleteMessage({ id });
		refetch();
	};
	const messages = data?.messages ?? [];
	return (
		<div className='flex justify-center items-center flex-1'>
			{messages.length > 0 ? (
				<Table className='w-[800px]'>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className='w-[100px]'>id</TableHead>
							<TableHead>Message</TableHead>
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.messages.map((invoice) => (
							<TableRow key={invoice.id}>
								<TableCell className='font-medium'>{invoice.id}</TableCell>
								<TableCell>{invoice.message}</TableCell>
								<TableCell>
									<form onSubmit={handleDelete}>
										<input value={invoice.id} type='hidden' name='id' />
										<Link href={`/?id=${invoice.id}`}>
											<Button className='bg-gray-200 hover:bg-gray-300 text-gray-800 mr-2'>
												Edit
											</Button>
										</Link>
										<Button
											className={`bg-blue-700  ${
												isDeleting
													? 'opacity-50 cursor-not-allowed'
													: 'hover:bg-blue-800'
											}`}
											disabled={isDeleting}>
											{isDeleting ? 'deleting...' : 'delete'}
										</Button>
									</form>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			) : (
				<h1>Messages not found</h1>
			)}
		</div>
	);
};

export default MessagesList;
