import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GameSessionWhereInputObjectSchema).optional(),
  some: z.lazy(() => GameSessionWhereInputObjectSchema).optional(),
  none: z.lazy(() => GameSessionWhereInputObjectSchema).optional()
}).strict();
export const GameSessionListRelationFilterObjectSchema: z.ZodType<Prisma.GameSessionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionListRelationFilter>;
export const GameSessionListRelationFilterObjectZodSchema = makeSchema();
