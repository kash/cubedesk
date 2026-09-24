import common from './common';
import navigation from './navigation';
import auth from './auth';
import settings from './settings';
import timer from './timer';
import solves from './solves';
import sessions from './sessions';
import stats from './stats';
import trainer from './trainer';
import community from './community';
import profile from './profile';
import admin from './admin';
import legal from './legal';

export default {
	...common,
	...navigation,
	...auth,
	...settings,
	...timer,
	...solves,
	...sessions,
	...stats,
	...trainer,
	...community,
	...profile,
	...admin,
	...legal,
};
