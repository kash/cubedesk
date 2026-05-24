import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GameOptionsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => GameOptionsWhereInputObjectSchema).optional().nullable()
}).strict();
export const GameOptionsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GameOptionsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsNullableScalarRelationFilter>;
export const GameOptionsNullableScalarRelationFilterObjectZodSchema = makeSchema();
