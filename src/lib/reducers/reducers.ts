import {combineReducers} from 'redux';
import timer from './timer';
import algorithms from './algorithms';
import account from './account';
import help from './help';
import ssr from './ssr';
import stats from './stats';
import general from './general';

export default combineReducers({
	timer,
	algorithms,
	stats,
	help,
	ssr,
	general,
	account,
});
