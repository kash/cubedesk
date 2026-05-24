import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CustomTrainerLikeWhereUniqueInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeWhereUniqueInput>;
export const CustomTrainerLikeWhereUniqueInputObjectZodSchema = makeSchema();
