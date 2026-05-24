import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  creator_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  new_trainer_id: z.literal(true).optional(),
  source_trainer_id: z.literal(true).optional()
}).strict();
export const CustomTrainerDownloadMinAggregateInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadMinAggregateInputType>;
export const CustomTrainerDownloadMinAggregateInputObjectZodSchema = makeSchema();
