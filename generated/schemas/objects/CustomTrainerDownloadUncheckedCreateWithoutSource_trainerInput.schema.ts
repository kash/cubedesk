import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  creator_id: z.string(),
  created_at: z.coerce.date().optional(),
  new_trainer_id: z.string().optional().nullable()
}).strict();
export const CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInput>;
export const CustomTrainerDownloadUncheckedCreateWithoutSource_trainerInputObjectZodSchema = makeSchema();
