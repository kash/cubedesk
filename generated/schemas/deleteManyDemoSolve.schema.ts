import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveWhereInputObjectSchema as DemoSolveWhereInputObjectSchema } from './objects/DemoSolveWhereInput.schema';

export const DemoSolveDeleteManySchema: z.ZodType<Prisma.DemoSolveDeleteManyArgs> = z.object({ where: DemoSolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveDeleteManyArgs>;

export const DemoSolveDeleteManyZodSchema = z.object({ where: DemoSolveWhereInputObjectSchema.optional() }).strict();