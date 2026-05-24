import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional().nullable()
}).strict();
export const CustomTrainerNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.CustomTrainerNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerNullableScalarRelationFilter>;
export const CustomTrainerNullableScalarRelationFilterObjectZodSchema = makeSchema();
