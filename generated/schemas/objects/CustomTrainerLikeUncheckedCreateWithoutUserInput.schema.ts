import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  custom_trainer_id: z.string(),
  created_at: z.coerce.date().optional(),
  creator_id: z.string()
}).strict();
export const CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateWithoutUserInput>;
export const CustomTrainerLikeUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
