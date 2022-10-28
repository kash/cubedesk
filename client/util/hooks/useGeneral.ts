import {RootStateOrAny, useSelector} from 'react-redux';
import {IModalProps} from '../../components/common/modal/Modal';
import {ReactNode} from 'react';

interface ModalListItem {
	createdAt: number;
	body: ReactNode;
	options: IModalProps;
}

export interface GeneralAllParams {
	modals: ModalListItem[];
	mobile_mode: boolean;
	browser_session_id: string;
	force_nav_collapsed: boolean;
	app_loaded: boolean;
}

export function useGeneral<T extends keyof GeneralAllParams>(key: T): GeneralAllParams[T] {
	return useSelector((state: RootStateOrAny) => (state.general as GeneralAllParams)[key]);
}
