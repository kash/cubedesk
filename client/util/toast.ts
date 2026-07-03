import {toast, ToastOptions} from 'react-toastify';

const toastOptions: ToastOptions = {
	position: 'bottom-left',
	autoClose: 5000,
	icon: false,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

export function toastSuccess(message: string) {
	toast.success(message, toastOptions);
}

export function toastError(message: string | Error | unknown) {
	let msg = message;
	if (message instanceof Error) {
		msg = message.message
	}

	toast.error(msg as string, toastOptions);
}
