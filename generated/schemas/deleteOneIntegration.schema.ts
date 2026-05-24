import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './objects/IntegrationInclude.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './objects/IntegrationWhereUniqueInput.schema';

export const IntegrationDeleteOneSchema: z.ZodType<Prisma.IntegrationDeleteArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), where: IntegrationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IntegrationDeleteArgs>;

export const IntegrationDeleteOneZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), where: IntegrationWhereUniqueInputObjectSchema }).strict();