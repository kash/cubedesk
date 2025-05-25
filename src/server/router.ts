import {createCallerFactory, createTRPCRouter} from '@/server/trpc';
import { adViewRouter } from './routers/ad-view';
import { customTrainerRouter } from './routers/custom-trainer';
import { customTrainerLikeRouter } from './routers/custom-trainer-like';
import { customTrainerDownloadRouter } from './routers/custom-trainer-download';
import { adminRouter } from './routers/admin';
import { algorithmOverrideRouter } from './routers/algorithm-override';
import { bulkActionsRouter } from './routers/bulk-actions';
import { customCubeTypeRouter } from './routers/custom-cube-type';
import { demoSolveRouter } from './routers/demo-solve';
import { eloLeaderboardsRouter } from './routers/elo-leaderboards';
import { friendshipRouter } from './routers/friendship';
import { gameRouter } from './routers/game';
import { integrationRouter } from './routers/integration';
import { leaderboardsRouter } from './routers/leaderboards';
import { matchRouter } from './routers/match';
import { membershipRouter } from './routers/membership';
import { notificationPreferenceRouter } from './routers/notification-preference';
import { reportRouter } from './routers/report';
import { sessionRouter } from './routers/session';
import { settingRouter } from './routers/setting';
import { solveRouter } from './routers/solve';
import { statsRouter } from './routers/stats';
import { statsModuleRouter } from './routers/stats-module';
import { trainerAlgorithmRouter } from './routers/trainer-algorithm';
import { trainerFavoriteRouter } from './routers/trainer-favorite';
import { unsubEmailsRouter } from './routers/unsub-emails';
import { userAccountRouter } from './routers/user-account';
import { userSearchRouter } from './routers/user-search';
import { authRouter } from './routers/auth';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  adView: adViewRouter,
  customTrainer: customTrainerRouter,
  customTrainerLike: customTrainerLikeRouter,
  customTrainerDownload: customTrainerDownloadRouter,
  admin: adminRouter,
  algorithmOverride: algorithmOverrideRouter,
  bulkActions: bulkActionsRouter,
  customCubeType: customCubeTypeRouter,
  demoSolve: demoSolveRouter,
  eloLeaderboards: eloLeaderboardsRouter,
  friendship: friendshipRouter,
  game: gameRouter,
  integration: integrationRouter,
  leaderboards: leaderboardsRouter,
  match: matchRouter,
  membership: membershipRouter,
  notificationPreference: notificationPreferenceRouter,
  report: reportRouter,
  session: sessionRouter,
  setting: settingRouter,
  solve: solveRouter,
  stats: statsRouter,
  statsModule: statsModuleRouter,
  trainerAlgorithm: trainerAlgorithmRouter,
  trainerFavorite: trainerFavoriteRouter,
  unsubEmails: unsubEmailsRouter,
  userAccount: userAccountRouter,
  userSearch: userSearchRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);