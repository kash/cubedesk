import {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../reducers/reducers';
import {IModalProps} from '../../components/common/modal/Modal';

interface ModalListItem {
	createdAt: number;
	body: ReactNode;
	options: IModalProps;
}

export interface GeneralAllParams {
	modals: ModalListItem[];
	mobile_mode: boolean;
	browser_session_id: string | null;
	force_nav_collapsed: boolean;
	app_loaded: boolean;
}

export function useGeneral<T extends keyof GeneralAllParams>(key: T): GeneralAllParams[T] {
	return useSelector((state: RootState) => (state.general as GeneralAllParams)[key]);
}
