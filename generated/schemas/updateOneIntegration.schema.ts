import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './objects/IntegrationInclude.schema';
import { IntegrationUpdateInputObjectSchema as IntegrationUpdateInputObjectSchema } from './objects/IntegrationUpdateInput.schema';
import { IntegrationUncheckedUpdateInputObjectSchema as IntegrationUncheckedUpdateInputObjectSchema } from './objects/IntegrationUncheckedUpdateInput.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './objects/IntegrationWhereUniqueInput.schema';

export const IntegrationUpdateOneSchema: z.ZodType<Prisma.IntegrationUpdateArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), data: z.union([IntegrationUpdateInputObjectSchema, IntegrationUncheckedUpdateInputObjectSchema]), where: IntegrationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IntegrationUpdateArgs>;

export const IntegrationUpdateOneZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), data: z.union([IntegrationUpdateInputObjectSchema, IntegrationUncheckedUpdateInputObjectSchema]), where: IntegrationWhereUniqueInputObjectSchema }).strict();