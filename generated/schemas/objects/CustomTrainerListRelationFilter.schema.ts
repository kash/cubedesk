import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomTrainerWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerListRelationFilterObjectSchema: z.ZodType<Prisma.CustomTrainerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerListRelationFilter>;
export const CustomTrainerListRelationFilterObjectZodSchema = makeSchema();
