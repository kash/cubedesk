import type {Prisma} from '../../node_modules/.prisma/client';

export interface UserAccountSolvesSummary {
  sum: number;
  count: number;
  average: number;
  min_time: number;
  max_time: number;
  cube_type: string;
}

export interface UserAccountMatchesSummary {
  count: number;
  wins: number;
  losses: number;
}

export interface UserAccountSummary {
  solves: number;
  reports_created: number;
  reports_for: number;
  profile_views: number;
  bans: number;
  matches: UserAccountMatchesSummary;
  timer_solves: UserAccountSolvesSummary[];
  match_solves: UserAccountSolvesSummary[];
}

export type UserAccountForAdmin = Prisma.UserAccountGetPayload<{
  include: {
    integrations: true;
    badges: {
      include: {
        badge_type: true;
      };
    };
    profile: {
      include: {
        pfp_image: true;
      };
    };
    reports_for: {
      orderBy: {
        created_at: 'desc';
      };
    };
    bans: {
      orderBy: {
        created_at: 'desc';
      };
    };
    chat_messages: {
      orderBy: {
        created_at: 'desc';
      };
    };
    settings: true;
  };
}> & {
  summary: UserAccountSummary;
};