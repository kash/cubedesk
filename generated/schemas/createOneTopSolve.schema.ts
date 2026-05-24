import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './objects/TopSolveSelect.schema';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './objects/TopSolveInclude.schema';
import { TopSolveCreateInputObjectSchema as TopSolveCreateInputObjectSchema } from './objects/TopSolveCreateInput.schema';
import { TopSolveUncheckedCreateInputObjectSchema as TopSolveUncheckedCreateInputObjectSchema } from './objects/TopSolveUncheckedCreateInput.schema';

export const TopSolveCreateOneSchema: z.ZodType<Prisma.TopSolveCreateArgs> = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), data: z.union([TopSolveCreateInputObjectSchema, TopSolveUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TopSolveCreateArgs>;

export const TopSolveCreateOneZodSchema = z.object({ select: TopSolveSelectObjectSchema.optional(), include: TopSolveIncludeObjectSchema.optional(), data: z.union([TopSolveCreateInputObjectSchema, TopSolveUncheckedCreateInputObjectSchema]) }).strict();