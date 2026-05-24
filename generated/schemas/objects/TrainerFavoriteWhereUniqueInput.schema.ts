import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TrainerFavoriteWhereUniqueInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteWhereUniqueInput>;
export const TrainerFavoriteWhereUniqueInputObjectZodSchema = makeSchema();
