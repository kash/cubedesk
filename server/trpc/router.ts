import {adminRouter} from './routers/admin';
import {authRouter} from './routers/auth';
import {badgeRouter} from './routers/badge';
import {bulkActionsRouter} from './routers/bulk_actions';
import {customCubeTypeRouter} from './routers/custom_cube_type';
import {customTrainerRouter} from './routers/custom_trainer';
import {demoSolveRouter} from './routers/demo_solve';
import {forgotPasswordRouter} from './routers/forgot_password';
import {friendshipRouter} from './routers/friendship';
import {gameRouter} from './routers/game';
import {integrationRouter} from './routers/integration';
import {leaderboardsRouter} from './routers/leaderboards';
import {matchRouter} from './routers/match';
import {notificationRouter} from './routers/notification';
import {notificationPrefRouter} from './routers/notification_pref';
import {profileRouter} from './routers/profile';
import {reportRouter} from './routers/report';
import {sessionRouter} from './routers/session';
import {settingRouter} from './routers/setting';
import {smartDeviceRouter} from './routers/smart_device';
import {solveRouter} from './routers/solve';
import {statsRouter} from './routers/stats';
import {timerBackgroundRouter} from './routers/timer_background';
import {trainerRouter} from './routers/trainer';
import {userRouter} from './routers/user';
import {router} from './trpc';

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
