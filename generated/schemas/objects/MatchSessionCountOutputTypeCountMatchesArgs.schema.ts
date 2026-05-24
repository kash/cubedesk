import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './MatchWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionCountOutputTypeCountMatchesArgsObjectSchema = makeSchema();
export const MatchSessionCountOutputTypeCountMatchesArgsObjectZodSchema = makeSchema();
