import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveUpdateInputObjectSchema as DemoSolveUpdateInputObjectSchema } from './objects/DemoSolveUpdateInput.schema';
import { DemoSolveUncheckedUpdateInputObjectSchema as DemoSolveUncheckedUpdateInputObjectSchema } from './objects/DemoSolveUncheckedUpdateInput.schema';
import { DemoSolveWhereUniqueInputObjectSchema as DemoSolveWhereUniqueInputObjectSchema } from './objects/DemoSolveWhereUniqueInput.schema';

export const DemoSolveUpdateOneSchema: z.ZodType<Prisma.DemoSolveUpdateArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(),  data: z.union([DemoSolveUpdateInputObjectSchema, DemoSolveUncheckedUpdateInputObjectSchema]), where: DemoSolveWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DemoSolveUpdateArgs>;

export const DemoSolveUpdateOneZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(),  data: z.union([DemoSolveUpdateInputObjectSchema, DemoSolveUncheckedUpdateInputObjectSchema]), where: DemoSolveWhereUniqueInputObjectSchema }).strict();