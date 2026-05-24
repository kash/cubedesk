import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereInputObjectSchema as CustomTrainerLikeWhereInputObjectSchema } from './CustomTrainerLikeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomTrainerLikeWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerLikeListRelationFilterObjectSchema: z.ZodType<Prisma.CustomTrainerLikeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeListRelationFilter>;
export const CustomTrainerLikeListRelationFilterObjectZodSchema = makeSchema();
