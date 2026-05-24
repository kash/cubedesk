import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CustomTrainerWhereUniqueInputObjectSchema: z.ZodType<Prisma.CustomTrainerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerWhereUniqueInput>;
export const CustomTrainerWhereUniqueInputObjectZodSchema = makeSchema();
