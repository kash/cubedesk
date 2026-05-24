import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './objects/AlgorithmOverrideInclude.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './objects/AlgorithmOverrideWhereUniqueInput.schema';

export const AlgorithmOverrideFindUniqueSchema: z.ZodType<Prisma.AlgorithmOverrideFindUniqueArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), where: AlgorithmOverrideWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideFindUniqueArgs>;

export const AlgorithmOverrideFindUniqueZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), where: AlgorithmOverrideWhereUniqueInputObjectSchema }).strict();