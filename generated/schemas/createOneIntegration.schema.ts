import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './objects/IntegrationInclude.schema';
import { IntegrationCreateInputObjectSchema as IntegrationCreateInputObjectSchema } from './objects/IntegrationCreateInput.schema';
import { IntegrationUncheckedCreateInputObjectSchema as IntegrationUncheckedCreateInputObjectSchema } from './objects/IntegrationUncheckedCreateInput.schema';

export const IntegrationCreateOneSchema: z.ZodType<Prisma.IntegrationCreateArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), data: z.union([IntegrationCreateInputObjectSchema, IntegrationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.IntegrationCreateArgs>;

export const IntegrationCreateOneZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), data: z.union([IntegrationCreateInputObjectSchema, IntegrationUncheckedCreateInputObjectSchema]) }).strict();