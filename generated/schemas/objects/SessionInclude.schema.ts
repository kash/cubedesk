import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { SessionCountOutputTypeArgsObjectSchema as SessionCountOutputTypeArgsObjectSchema } from './SessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SessionIncludeObjectSchema: z.ZodType<Prisma.SessionInclude> = makeSchema() as unknown as z.ZodType<Prisma.SessionInclude>;
export const SessionIncludeObjectZodSchema = makeSchema();
