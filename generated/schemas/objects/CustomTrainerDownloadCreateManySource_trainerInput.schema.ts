import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  creator_id: z.string(),
  created_at: z.coerce.date().optional(),
  new_trainer_id: z.string().optional().nullable()
}).strict();
export const CustomTrainerDownloadCreateManySource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManySource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManySource_trainerInput>;
export const CustomTrainerDownloadCreateManySource_trainerInputObjectZodSchema = makeSchema();
