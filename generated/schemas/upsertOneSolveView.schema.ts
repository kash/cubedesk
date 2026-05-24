import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './objects/SolveViewSelect.schema';
import { SolveViewIncludeObjectSchema as SolveViewIncludeObjectSchema } from './objects/SolveViewInclude.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './objects/SolveViewWhereUniqueInput.schema';
import { SolveViewCreateInputObjectSchema as SolveViewCreateInputObjectSchema } from './objects/SolveViewCreateInput.schema';
import { SolveViewUncheckedCreateInputObjectSchema as SolveViewUncheckedCreateInputObjectSchema } from './objects/SolveViewUncheckedCreateInput.schema';
import { SolveViewUpdateInputObjectSchema as SolveViewUpdateInputObjectSchema } from './objects/SolveViewUpdateInput.schema';
import { SolveViewUncheckedUpdateInputObjectSchema as SolveViewUncheckedUpdateInputObjectSchema } from './objects/SolveViewUncheckedUpdateInput.schema';

export const SolveViewUpsertOneSchema: z.ZodType<Prisma.SolveViewUpsertArgs> = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), where: SolveViewWhereUniqueInputObjectSchema, create: z.union([ SolveViewCreateInputObjectSchema, SolveViewUncheckedCreateInputObjectSchema ]), update: z.union([ SolveViewUpdateInputObjectSchema, SolveViewUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SolveViewUpsertArgs>;

export const SolveViewUpsertOneZodSchema = z.object({ select: SolveViewSelectObjectSchema.optional(), include: SolveViewIncludeObjectSchema.optional(), where: SolveViewWhereUniqueInputObjectSchema, create: z.union([ SolveViewCreateInputObjectSchema, SolveViewUncheckedCreateInputObjectSchema ]), update: z.union([ SolveViewUpdateInputObjectSchema, SolveViewUncheckedUpdateInputObjectSchema ]) }).strict();