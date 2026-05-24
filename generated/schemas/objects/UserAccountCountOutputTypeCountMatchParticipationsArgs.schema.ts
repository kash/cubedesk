import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantWhereInputObjectSchema as MatchParticipantWhereInputObjectSchema } from './MatchParticipantWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchParticipantWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountMatchParticipationsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountMatchParticipationsArgsObjectZodSchema = makeSchema();
