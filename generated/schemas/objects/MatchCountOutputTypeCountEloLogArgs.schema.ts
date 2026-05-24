import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './EloLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereInputObjectSchema).optional()
}).strict();
export const MatchCountOutputTypeCountEloLogArgsObjectSchema = makeSchema();
export const MatchCountOutputTypeCountEloLogArgsObjectZodSchema = makeSchema();
