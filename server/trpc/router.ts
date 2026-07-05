import {router} from './trpc';
import {authRouter} from './routers/auth';
import {sessionRouter} from './routers/session';
import {settingRouter} from './routers/setting';
import {solveRouter} from './routers/solve';
import {statsRouter} from './routers/stats';
import {demoSolveRouter} from './routers/demo_solve';
import {userRouter} from './routers/user';
import {notificationPrefRouter} from './routers/notification_pref';
import {customTrainerRouter} from './routers/custom_trainer';
import {trainerRouter} from './routers/trainer';
import {friendshipRouter} from './routers/friendship';
import {leaderboardsRouter} from './routers/leaderboards';
import {customCubeTypeRouter} from './routers/custom_cube_type';
import {bulkActionsRouter} from './routers/bulk_actions';
import {gameRouter} from './routers/game';
import {integrationRouter} from './routers/integration';
import {matchRouter} from './routers/match';
import {adminRouter} from './routers/admin';
import {reportRouter} from './routers/report';
import {notificationRouter} from './routers/notification';
import {forgotPasswordRouter} from './routers/forgot_password';
import {profileRouter} from './routers/profile';
import {smartDeviceRouter} from './routers/smart_device';
import {timerBackgroundRouter} from './routers/timer_background';
import {badgeRouter} from './routers/badge';

export const appRouter = router({
	auth: authRouter,
	session: sessionRouter,
	setting: settingRouter,
	solve: solveRouter,
	stats: statsRouter,
	demoSolve: demoSolveRouter,
	user: userRouter,
	notificationPref: notificationPrefRouter,
	customTrainer: customTrainerRouter,
	trainer: trainerRouter,
	friendship: friendshipRouter,
	leaderboards: leaderboardsRouter,
	customCubeType: customCubeTypeRouter,
	bulkActions: bulkActionsRouter,
	game: gameRouter,
	integration: integrationRouter,
	match: matchRouter,
	admin: adminRouter,
	report: reportRouter,
	notification: notificationRouter,
	forgotPassword: forgotPasswordRouter,
	profile: profileRouter,
	smartDevice: smartDeviceRouter,
	timerBackground: timerBackgroundRouter,
	badge: badgeRouter,
});

export type AppRouter = typeof appRouter;
