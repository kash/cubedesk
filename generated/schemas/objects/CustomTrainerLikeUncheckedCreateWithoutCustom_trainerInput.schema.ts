import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  creator_id: z.string()
}).strict();
export const CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInput>;
export const CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectZodSchema = makeSchema();
