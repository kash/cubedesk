import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountMatchesWonArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountMatchesWonArgsObjectZodSchema = makeSchema();
