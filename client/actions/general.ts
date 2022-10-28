import {GeneralAllParams} from '../util/hooks/useGeneral';
import {IModalProps} from '../components/common/modal/Modal';

export function openSlideShowModal(body, options: IModalProps = {}) {
	options = {
		noPadding: true,
		width: 900,
		hideCloseButton: true,
		...options,
	};

	return {
		type: 'OPEN_MODAL',
		payload: {
			createdAt: new Date().getTime(),
			body,
			options,
		},
	};
}

export function openModal(body, options: IModalProps = {}) {
	return {
		type: 'OPEN_MODAL',
		payload: {
			createdAt: new Date().getTime(),
			body,
			options,
		},
	};
}

export function setGeneral<T extends keyof GeneralAllParams>(key: T, value: GeneralAllParams[T]) {
	return {
		type: 'SET_GENERAL',
		payload: {
			key,
			value,
		},
	};
}

export function closeModal() {
	return (dispatch) => {
		dispatch({
			type: 'CLOSE_MODAL',
		});
	};
}
