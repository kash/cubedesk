import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './objects/IntegrationInclude.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './objects/IntegrationWhereUniqueInput.schema';
import { IntegrationCreateInputObjectSchema as IntegrationCreateInputObjectSchema } from './objects/IntegrationCreateInput.schema';
import { IntegrationUncheckedCreateInputObjectSchema as IntegrationUncheckedCreateInputObjectSchema } from './objects/IntegrationUncheckedCreateInput.schema';
import { IntegrationUpdateInputObjectSchema as IntegrationUpdateInputObjectSchema } from './objects/IntegrationUpdateInput.schema';
import { IntegrationUncheckedUpdateInputObjectSchema as IntegrationUncheckedUpdateInputObjectSchema } from './objects/IntegrationUncheckedUpdateInput.schema';

export const IntegrationUpsertOneSchema: z.ZodType<Prisma.IntegrationUpsertArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), where: IntegrationWhereUniqueInputObjectSchema, create: z.union([ IntegrationCreateInputObjectSchema, IntegrationUncheckedCreateInputObjectSchema ]), update: z.union([ IntegrationUpdateInputObjectSchema, IntegrationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.IntegrationUpsertArgs>;

export const IntegrationUpsertOneZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), where: IntegrationWhereUniqueInputObjectSchema, create: z.union([ IntegrationCreateInputObjectSchema, IntegrationUncheckedCreateInputObjectSchema ]), update: z.union([ IntegrationUpdateInputObjectSchema, IntegrationUncheckedUpdateInputObjectSchema ]) }).strict();