import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './objects/AlgorithmOverrideInclude.schema';
import { AlgorithmOverrideCreateInputObjectSchema as AlgorithmOverrideCreateInputObjectSchema } from './objects/AlgorithmOverrideCreateInput.schema';
import { AlgorithmOverrideUncheckedCreateInputObjectSchema as AlgorithmOverrideUncheckedCreateInputObjectSchema } from './objects/AlgorithmOverrideUncheckedCreateInput.schema';

export const AlgorithmOverrideCreateOneSchema: z.ZodType<Prisma.AlgorithmOverrideCreateArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), data: z.union([AlgorithmOverrideCreateInputObjectSchema, AlgorithmOverrideUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateArgs>;

export const AlgorithmOverrideCreateOneZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), data: z.union([AlgorithmOverrideCreateInputObjectSchema, AlgorithmOverrideUncheckedCreateInputObjectSchema]) }).strict();