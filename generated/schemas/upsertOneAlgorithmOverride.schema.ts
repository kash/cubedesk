import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AlgorithmOverrideSelectObjectSchema as AlgorithmOverrideSelectObjectSchema } from './objects/AlgorithmOverrideSelect.schema';
import { AlgorithmOverrideIncludeObjectSchema as AlgorithmOverrideIncludeObjectSchema } from './objects/AlgorithmOverrideInclude.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './objects/AlgorithmOverrideWhereUniqueInput.schema';
import { AlgorithmOverrideCreateInputObjectSchema as AlgorithmOverrideCreateInputObjectSchema } from './objects/AlgorithmOverrideCreateInput.schema';
import { AlgorithmOverrideUncheckedCreateInputObjectSchema as AlgorithmOverrideUncheckedCreateInputObjectSchema } from './objects/AlgorithmOverrideUncheckedCreateInput.schema';
import { AlgorithmOverrideUpdateInputObjectSchema as AlgorithmOverrideUpdateInputObjectSchema } from './objects/AlgorithmOverrideUpdateInput.schema';
import { AlgorithmOverrideUncheckedUpdateInputObjectSchema as AlgorithmOverrideUncheckedUpdateInputObjectSchema } from './objects/AlgorithmOverrideUncheckedUpdateInput.schema';

export const AlgorithmOverrideUpsertOneSchema: z.ZodType<Prisma.AlgorithmOverrideUpsertArgs> = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), where: AlgorithmOverrideWhereUniqueInputObjectSchema, create: z.union([ AlgorithmOverrideCreateInputObjectSchema, AlgorithmOverrideUncheckedCreateInputObjectSchema ]), update: z.union([ AlgorithmOverrideUpdateInputObjectSchema, AlgorithmOverrideUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpsertArgs>;

export const AlgorithmOverrideUpsertOneZodSchema = z.object({ select: AlgorithmOverrideSelectObjectSchema.optional(), include: AlgorithmOverrideIncludeObjectSchema.optional(), where: AlgorithmOverrideWhereUniqueInputObjectSchema, create: z.union([ AlgorithmOverrideCreateInputObjectSchema, AlgorithmOverrideUncheckedCreateInputObjectSchema ]), update: z.union([ AlgorithmOverrideUpdateInputObjectSchema, AlgorithmOverrideUncheckedUpdateInputObjectSchema ]) }).strict();