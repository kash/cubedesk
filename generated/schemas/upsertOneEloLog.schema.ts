import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './objects/EloLogSelect.schema';
import { EloLogIncludeObjectSchema as EloLogIncludeObjectSchema } from './objects/EloLogInclude.schema';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './objects/EloLogWhereUniqueInput.schema';
import { EloLogCreateInputObjectSchema as EloLogCreateInputObjectSchema } from './objects/EloLogCreateInput.schema';
import { EloLogUncheckedCreateInputObjectSchema as EloLogUncheckedCreateInputObjectSchema } from './objects/EloLogUncheckedCreateInput.schema';
import { EloLogUpdateInputObjectSchema as EloLogUpdateInputObjectSchema } from './objects/EloLogUpdateInput.schema';
import { EloLogUncheckedUpdateInputObjectSchema as EloLogUncheckedUpdateInputObjectSchema } from './objects/EloLogUncheckedUpdateInput.schema';

export const EloLogUpsertOneSchema: z.ZodType<Prisma.EloLogUpsertArgs> = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), where: EloLogWhereUniqueInputObjectSchema, create: z.union([ EloLogCreateInputObjectSchema, EloLogUncheckedCreateInputObjectSchema ]), update: z.union([ EloLogUpdateInputObjectSchema, EloLogUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.EloLogUpsertArgs>;

export const EloLogUpsertOneZodSchema = z.object({ select: EloLogSelectObjectSchema.optional(), include: EloLogIncludeObjectSchema.optional(), where: EloLogWhereUniqueInputObjectSchema, create: z.union([ EloLogCreateInputObjectSchema, EloLogUncheckedCreateInputObjectSchema ]), update: z.union([ EloLogUpdateInputObjectSchema, EloLogUncheckedUpdateInputObjectSchema ]) }).strict();