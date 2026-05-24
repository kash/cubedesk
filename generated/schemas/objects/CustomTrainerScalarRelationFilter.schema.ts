import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerScalarRelationFilterObjectSchema: z.ZodType<Prisma.CustomTrainerScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerScalarRelationFilter>;
export const CustomTrainerScalarRelationFilterObjectZodSchema = makeSchema();
