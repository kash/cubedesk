import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './objects/IntegrationSelect.schema';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './objects/IntegrationInclude.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './objects/IntegrationWhereUniqueInput.schema';

export const IntegrationFindUniqueOrThrowSchema: z.ZodType<Prisma.IntegrationFindUniqueOrThrowArgs> = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), where: IntegrationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IntegrationFindUniqueOrThrowArgs>;

export const IntegrationFindUniqueOrThrowZodSchema = z.object({ select: IntegrationSelectObjectSchema.optional(), include: IntegrationIncludeObjectSchema.optional(), where: IntegrationWhereUniqueInputObjectSchema }).strict();