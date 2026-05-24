import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveUpdateManyMutationInputObjectSchema as DemoSolveUpdateManyMutationInputObjectSchema } from './objects/DemoSolveUpdateManyMutationInput.schema';
import { DemoSolveWhereInputObjectSchema as DemoSolveWhereInputObjectSchema } from './objects/DemoSolveWhereInput.schema';

export const DemoSolveUpdateManySchema: z.ZodType<Prisma.DemoSolveUpdateManyArgs> = z.object({ data: DemoSolveUpdateManyMutationInputObjectSchema, where: DemoSolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveUpdateManyArgs>;

export const DemoSolveUpdateManyZodSchema = z.object({ data: DemoSolveUpdateManyMutationInputObjectSchema, where: DemoSolveWhereInputObjectSchema.optional() }).strict();