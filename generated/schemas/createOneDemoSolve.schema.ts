import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './objects/DemoSolveSelect.schema';
import { DemoSolveCreateInputObjectSchema as DemoSolveCreateInputObjectSchema } from './objects/DemoSolveCreateInput.schema';
import { DemoSolveUncheckedCreateInputObjectSchema as DemoSolveUncheckedCreateInputObjectSchema } from './objects/DemoSolveUncheckedCreateInput.schema';

export const DemoSolveCreateOneSchema: z.ZodType<Prisma.DemoSolveCreateArgs> = z.object({ select: DemoSolveSelectObjectSchema.optional(),  data: z.union([DemoSolveCreateInputObjectSchema, DemoSolveUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DemoSolveCreateArgs>;

export const DemoSolveCreateOneZodSchema = z.object({ select: DemoSolveSelectObjectSchema.optional(),  data: z.union([DemoSolveCreateInputObjectSchema, DemoSolveUncheckedCreateInputObjectSchema]) }).strict();