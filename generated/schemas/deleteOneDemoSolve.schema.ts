import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveWhereUniqueInputObjectSchema as DemoSolveWhereUniqueInputObjectSchema } from './objects/DemoSolveWhereUniqueInput.schema';

export const DemoSolveDeleteOneSchema: z.ZodType<Prisma.DemoSolveDeleteArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(),  where: DemoSolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DemoSolveDeleteArgs>;

export const DemoSolveDeleteOneZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(),  where: DemoSolveWhereUniqueInputObjectSchema }).strict();