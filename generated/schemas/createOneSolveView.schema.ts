import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './objects/SolveViewSelect.schema';
import { SolveViewIncludeObjectSchema as SolveViewIncludeObjectSchema } from './objects/SolveViewInclude.schema';
import { SolveViewCreateInputObjectSchema as SolveViewCreateInputObjectSchema } from './objects/SolveViewCreateInput.schema';
import { SolveViewUncheckedCreateInputObjectSchema as SolveViewUncheckedCreateInputObjectSchema } from './objects/SolveViewUncheckedCreateInput.schema';

export const SolveViewCreateOneSchema: z.ZodType<Prisma.SolveViewCreateArgs> = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), data: z.union([SolveViewCreateInputObjectSchema, SolveViewUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SolveViewCreateArgs>;

export const SolveViewCreateOneZodSchema = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), data: z.union([SolveViewCreateInputObjectSchema, SolveViewUncheckedCreateInputObjectSchema]) }).strict();