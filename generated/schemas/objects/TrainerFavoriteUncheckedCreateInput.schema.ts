import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TrainerFavoriteUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUncheckedCreateInput>;
export const TrainerFavoriteUncheckedCreateInputObjectZodSchema = makeSchema();
