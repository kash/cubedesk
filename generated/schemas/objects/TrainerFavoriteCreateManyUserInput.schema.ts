import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_key: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TrainerFavoriteCreateManyUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateManyUserInput>;
export const TrainerFavoriteCreateManyUserInputObjectZodSchema = makeSchema();
