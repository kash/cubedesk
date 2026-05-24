import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveUpdateManyMutationInputObjectSchema as DemoSolveUpdateManyMutationInputObjectSchema } from './objects/DemoSolveUpdateManyMutationInput.schema';
import { DemoSolveWhereInputObjectSchema as DemoSolveWhereInputObjectSchema } from './objects/DemoSolveWhereInput.schema';

export const DemoSolveUpdateManyAndReturnSchema: z.ZodType<Prisma.DemoSolveUpdateManyAndReturnArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(), data: DemoSolveUpdateManyMutationInputObjectSchema, where: DemoSolveWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DemoSolveUpdateManyAndReturnArgs>;

export const DemoSolveUpdateManyAndReturnZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(), data: DemoSolveUpdateManyMutationInputObjectSchema, where: DemoSolveWhereInputObjectSchema.optional() }).strict();