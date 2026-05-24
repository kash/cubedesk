import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './objects/AlgorithmOverrideInclude.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './objects/AlgorithmOverrideWhereUniqueInput.schema';

export const AlgorithmOverrideFindUniqueOrThrowSchema: z.ZodType<Prisma.AlgorithmOverrideFindUniqueOrThrowArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), where: AlgorithmOverrideWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideFindUniqueOrThrowArgs>;

export const AlgorithmOverrideFindUniqueOrThrowZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), where: AlgorithmOverrideWhereUniqueInputObjectSchema }).strict();