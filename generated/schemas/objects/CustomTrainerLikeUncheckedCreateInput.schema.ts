import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  creator_id: z.string()
}).strict();
export const CustomTrainerLikeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedCreateInput>;
export const CustomTrainerLikeUncheckedCreateInputObjectZodSchema = makeSchema();
