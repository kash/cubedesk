import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateWithoutCreatorInput>;
export const CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectZodSchema = makeSchema();
