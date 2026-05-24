import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  cube_key: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const TrainerFavoriteCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateWithoutUserInput>;
export const TrainerFavoriteCreateWithoutUserInputObjectZodSchema = makeSchema();
