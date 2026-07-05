import {adminRouter} from '@/server/trpc/routers/admin';
import {authRouter} from '@/server/trpc/routers/auth';
import {badgeRouter} from '@/server/trpc/routers/badge';
import {bulkActionsRouter} from '@/server/trpc/routers/bulk_actions';
import {customCubeTypeRouter} from '@/server/trpc/routers/custom_cube_type';
import {customTrainerRouter} from '@/server/trpc/routers/custom_trainer';
import {demoSolveRouter} from '@/server/trpc/routers/demo_solve';
import {forgotPasswordRouter} from '@/server/trpc/routers/forgot_password';
import {friendshipRouter} from '@/server/trpc/routers/friendship';
import {gameRouter} from '@/server/trpc/routers/game';
import {integrationRouter} from '@/server/trpc/routers/integration';
import {leaderboardsRouter} from '@/server/trpc/routers/leaderboards';
import {matchRouter} from '@/server/trpc/routers/match';
import {notificationRouter} from '@/server/trpc/routers/notification';
import {notificationPrefRouter} from '@/server/trpc/routers/notification_pref';
import {profileRouter} from '@/server/trpc/routers/profile';
import {reportRouter} from '@/server/trpc/routers/report';
import {sessionRouter} from '@/server/trpc/routers/session';
import {settingRouter} from '@/server/trpc/routers/setting';
import {smartDeviceRouter} from '@/server/trpc/routers/smart_device';
import {solveRouter} from '@/server/trpc/routers/solve';
import {statsRouter} from '@/server/trpc/routers/stats';
import {timerBackgroundRouter} from '@/server/trpc/routers/timer_background';
import {trainerRouter} from '@/server/trpc/routers/trainer';
import {userRouter} from '@/server/trpc/routers/user';
import {router} from '@/server/trpc/trpc';

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
