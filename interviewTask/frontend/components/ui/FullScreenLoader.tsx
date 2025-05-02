import { Loader2 } from 'lucide-react';
type FullScreenLoaderProps = {
	className?: string;
	text: 'Sending' | 'Downloading';
};
export function FullscreenLoader({ className, text }: FullScreenLoaderProps) {
	return (
		<div
			className={`fixed flex flex-col inset-0 z-50  items-center justify-center bg-white/80 backdrop-blur-sm ${
				className || ''
			}`}>
			<Loader2 className='h-12 w-12 animate-spin text-black' />
			<h1>{text} messages...</h1>
		</div>
	);
}
