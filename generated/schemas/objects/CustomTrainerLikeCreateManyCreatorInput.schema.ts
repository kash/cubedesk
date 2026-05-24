import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const CustomTrainerLikeCreateManyCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateManyCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateManyCreatorInput>;
export const CustomTrainerLikeCreateManyCreatorInputObjectZodSchema = makeSchema();
