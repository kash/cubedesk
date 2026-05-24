import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TrainerFavoriteCreateManyInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateManyInput>;
export const TrainerFavoriteCreateManyInputObjectZodSchema = makeSchema();
