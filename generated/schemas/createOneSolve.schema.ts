import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './objects/SolveSelect.schema';
import { SolveIncludeObjectSchema as SolveIncludeObjectSchema } from './objects/SolveInclude.schema';
import { SolveCreateInputObjectSchema as SolveCreateInputObjectSchema } from './objects/SolveCreateInput.schema';
import { SolveUncheckedCreateInputObjectSchema as SolveUncheckedCreateInputObjectSchema } from './objects/SolveUncheckedCreateInput.schema';

export const SolveCreateOneSchema: z.ZodType<Prisma.SolveCreateArgs> = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), data: z.union([SolveCreateInputObjectSchema, SolveUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SolveCreateArgs>;

export const SolveCreateOneZodSchema = z.object({ select: SolveSelectObjectSchema.optional(), include: SolveIncludeObjectSchema.optional(), data: z.union([SolveCreateInputObjectSchema, SolveUncheckedCreateInputObjectSchema]) }).strict();