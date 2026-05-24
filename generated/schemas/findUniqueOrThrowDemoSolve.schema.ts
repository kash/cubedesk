import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveWhereUniqueInputObjectSchema as DemoSolveWhereUniqueInputObjectSchema } from './objects/DemoSolveWhereUniqueInput.schema';

export const DemoSolveFindUniqueOrThrowSchema: z.ZodType<Prisma.DemoSolveFindUniqueOrThrowArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(),  where: DemoSolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DemoSolveFindUniqueOrThrowArgs>;

export const DemoSolveFindUniqueOrThrowZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(),  where: DemoSolveWhereUniqueInputObjectSchema }).strict();