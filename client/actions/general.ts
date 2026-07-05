import {IModalProps} from '@/components/common/modal/Modal';
import {GeneralAllParams} from '@/util/hooks/useGeneral';

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
	return {
		type: 'CLOSE_MODAL',
	};
}
