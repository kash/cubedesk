import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveWhereUniqueInputObjectSchema as DemoSolveWhereUniqueInputObjectSchema } from './objects/DemoSolveWhereUniqueInput.schema';
import { DemoSolveCreateInputObjectSchema as DemoSolveCreateInputObjectSchema } from './objects/DemoSolveCreateInput.schema';
import { DemoSolveUncheckedCreateInputObjectSchema as DemoSolveUncheckedCreateInputObjectSchema } from './objects/DemoSolveUncheckedCreateInput.schema';
import { DemoSolveUpdateInputObjectSchema as DemoSolveUpdateInputObjectSchema } from './objects/DemoSolveUpdateInput.schema';
import { DemoSolveUncheckedUpdateInputObjectSchema as DemoSolveUncheckedUpdateInputObjectSchema } from './objects/DemoSolveUncheckedUpdateInput.schema';

export const DemoSolveUpsertOneSchema: z.ZodType<Prisma.DemoSolveUpsertArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(),  where: DemoSolveWhereUniqueInputObjectSchema, create: z.union([ DemoSolveCreateInputObjectSchema, DemoSolveUncheckedCreateInputObjectSchema ]), update: z.union([ DemoSolveUpdateInputObjectSchema, DemoSolveUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DemoSolveUpsertArgs>;

export const DemoSolveUpsertOneZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(),  where: DemoSolveWhereUniqueInputObjectSchema, create: z.union([ DemoSolveCreateInputObjectSchema, DemoSolveUncheckedCreateInputObjectSchema ]), update: z.union([ DemoSolveUpdateInputObjectSchema, DemoSolveUncheckedUpdateInputObjectSchema ]) }).strict();