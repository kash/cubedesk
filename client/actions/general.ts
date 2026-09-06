import type {GeneralAllParams} from '@/util/hooks/useGeneral';

export function setGeneral<T extends keyof GeneralAllParams>(key: T, value: GeneralAllParams[T]) {
	return {
		type: 'SET_GENERAL',
		payload: {
			key,
			value,
		},
	};
}
