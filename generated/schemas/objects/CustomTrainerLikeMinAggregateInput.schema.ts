import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  custom_trainer_id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  creator_id: z.literal(true).optional()
}).strict();
export const CustomTrainerLikeMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeMinAggregateInputType>;
export const CustomTrainerLikeMinAggregateInputObjectZodSchema = makeSchema();
