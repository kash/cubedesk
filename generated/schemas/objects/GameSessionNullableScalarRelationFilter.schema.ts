import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GameSessionWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => GameSessionWhereInputObjectSchema).optional().nullable()
}).strict();
export const GameSessionNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GameSessionNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionNullableScalarRelationFilter>;
export const GameSessionNullableScalarRelationFilterObjectZodSchema = makeSchema();
