import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AdViewSelectObjectSchema as AdViewSelectObjectSchema } from './objects/AdViewSelect.schema';
import { AdViewIncludeObjectSchema as AdViewIncludeObjectSchema } from './objects/AdViewInclude.schema';
import { AdViewWhereUniqueInputObjectSchema as AdViewWhereUniqueInputObjectSchema } from './objects/AdViewWhereUniqueInput.schema';
import { AdViewCreateInputObjectSchema as AdViewCreateInputObjectSchema } from './objects/AdViewCreateInput.schema';
import { AdViewUncheckedCreateInputObjectSchema as AdViewUncheckedCreateInputObjectSchema } from './objects/AdViewUncheckedCreateInput.schema';
import { AdViewUpdateInputObjectSchema as AdViewUpdateInputObjectSchema } from './objects/AdViewUpdateInput.schema';
import { AdViewUncheckedUpdateInputObjectSchema as AdViewUncheckedUpdateInputObjectSchema } from './objects/AdViewUncheckedUpdateInput.schema';

export const AdViewUpsertOneSchema: z.ZodType<Prisma.AdViewUpsertArgs> = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema, create: z.union([ AdViewCreateInputObjectSchema, AdViewUncheckedCreateInputObjectSchema ]), update: z.union([ AdViewUpdateInputObjectSchema, AdViewUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AdViewUpsertArgs>;

export const AdViewUpsertOneZodSchema = z.object({ select: AdViewSelectObjectSchema.optional(), include: AdViewIncludeObjectSchema.optional(), where: AdViewWhereUniqueInputObjectSchema, create: z.union([ AdViewCreateInputObjectSchema, AdViewUncheckedCreateInputObjectSchema ]), update: z.union([ AdViewUpdateInputObjectSchema, AdViewUncheckedUpdateInputObjectSchema ]) }).strict();