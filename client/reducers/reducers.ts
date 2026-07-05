import {combineReducers} from 'redux';
import account from '@/reducers/account';
import algorithms from '@/reducers/algorithms';
import general from '@/reducers/general';
import help from '@/reducers/help';
import ssr from '@/reducers/ssr';
import stats from '@/reducers/stats';
import timer from '@/reducers/timer';

const rootReducer = combineReducers({
	timer,
	algorithms,
	stats,
	help,
	ssr,
	general,
	account,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
