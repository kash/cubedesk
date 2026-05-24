import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  creator_id: z.string(),
  created_at: z.coerce.date().optional(),
  source_trainer_id: z.string()
}).strict();
export const CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInput>;
export const CustomTrainerDownloadUncheckedCreateWithoutNew_trainerInputObjectZodSchema = makeSchema();
