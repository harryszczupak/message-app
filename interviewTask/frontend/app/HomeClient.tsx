'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FullscreenLoader } from '@/components/ui/FullScreenLoader';
import {
	useAddMessageMutation,
	useUpdateMessageMutation,
} from './store/apiSlice';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';
const formSchema = z.object({
	textMessage: z
		.string()
		.min(10)
		.refine((value) => value.trim().length > 0, {
			message: 'Pole nie może być puste lub zawierać tylko spacje',
		}),
});

export default function Home() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const idParam = Number(searchParams.get('id'));
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			textMessage: '',
		},
	});
	const [addMessage, { isLoading, isSuccess, error }] = useAddMessageMutation();
	const [updateMessage] = useUpdateMessageMutation();
	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
		const message = data.textMessage;
		console.log(idParam);

		if (idParam) {
			await updateMessage({ id: idParam, data: { message } });
		} else {
			await addMessage({ message });
		}

		router.push('/about');
	};
	return (
		<div className=' flex flex-col flex-1'>
			{isLoading ? (
				<FullscreenLoader text='Sending' />
			) : (
				<div className='flex items-center justify-center  p8 w-full flex-1 bg-gray-100'>
					<Form {...form}>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								form.handleSubmit(handleSubmit)(e);
							}}
							className='max-w-md w-full flex flex-col gap-4 shadow-md p-8 bg-white'>
							<FormField
								control={form.control}
								name='textMessage'
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Enter message</FormLabel>
											<FormControl>
												<Textarea
													className='resize-none bg-gray-200 h-[200px] w-full '
													{...field}></Textarea>
											</FormControl>
											<FormMessage></FormMessage>
										</FormItem>
									);
								}}></FormField>
							<Button
								type='submit'
								disabled={isLoading}
								className='w-full my-5
          bg-blue-700'>
								{idParam ? 'Update' : 'Send'}
							</Button>
							{isSuccess && (
								<p style={{ color: 'green' }}>Wiadomość wysłana!</p>
							)}
							{error && <p style={{ color: 'red' }}>Błąd przy wysyłaniu.</p>}
						</form>
					</Form>
				</div>
			)}
		</div>
	);
}
