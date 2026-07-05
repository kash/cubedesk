import {combineReducers} from 'redux';
import account from './account';
import algorithms from './algorithms';
import general from './general';
import help from './help';
import ssr from './ssr';
import stats from './stats';
import timer from './timer';

export default combineReducers({
	timer,
	algorithms,
	stats,
	help,
	ssr,
	general,
	account,
});
