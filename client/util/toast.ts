import {toast} from 'sonner';

export function toastSuccess(message: string) {
	toast.success(message);
}

export function toastError(message: string | Error | unknown) {
	const text =
		message instanceof Error
			? message.message
			: typeof message === 'string'
				? message
				: 'Something went wrong';
	toast.error(text);
}
