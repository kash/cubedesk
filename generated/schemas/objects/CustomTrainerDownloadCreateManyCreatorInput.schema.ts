import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  new_trainer_id: z.string().optional().nullable(),
  source_trainer_id: z.string()
}).strict();
export const CustomTrainerDownloadCreateManyCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManyCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManyCreatorInput>;
export const CustomTrainerDownloadCreateManyCreatorInputObjectZodSchema = makeSchema();
