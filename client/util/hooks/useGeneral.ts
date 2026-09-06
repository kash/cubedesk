import {RootState} from '@/reducers/reducers';
import {useSelector} from 'react-redux';

export interface GeneralAllParams {
	mobile_mode: boolean;
	browser_session_id: string | null;
	force_nav_collapsed: boolean;
	app_loaded: boolean;
}

export function useGeneral<T extends keyof GeneralAllParams>(key: T): GeneralAllParams[T] {
	return useSelector((state: RootState) => (state.general as GeneralAllParams)[key]);
}
