import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundWhereInputObjectSchema as TimerBackgroundWhereInputObjectSchema } from './TimerBackgroundWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TimerBackgroundWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TimerBackgroundWhereInputObjectSchema).optional().nullable()
}).strict();
export const TimerBackgroundNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TimerBackgroundNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundNullableScalarRelationFilter>;
export const TimerBackgroundNullableScalarRelationFilterObjectZodSchema = makeSchema();
