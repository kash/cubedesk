import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { IntegrationOrderByWithRelationInputObjectSchema as IntegrationOrderByWithRelationInputObjectSchema } from './objects/IntegrationOrderByWithRelationInput.schema';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './objects/IntegrationWhereInput.schema';
import { IntegrationWhereUniqueInputObjectSchema as IntegrationWhereUniqueInputObjectSchema } from './objects/IntegrationWhereUniqueInput.schema';
import { IntegrationCountAggregateInputObjectSchema as IntegrationCountAggregateInputObjectSchema } from './objects/IntegrationCountAggregateInput.schema';

export const IntegrationCountSchema: z.ZodType<Prisma.IntegrationCountArgs> = z.object({ orderBy: z.union([IntegrationOrderByWithRelationInputObjectSchema, IntegrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: IntegrationWhereInputObjectSchema.optional(), cursor: IntegrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), IntegrationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.IntegrationCountArgs>;

export const IntegrationCountZodSchema = z.object({ orderBy: z.union([IntegrationOrderByWithRelationInputObjectSchema, IntegrationOrderByWithRelationInputObjectSchema.array()]).optional(), where: IntegrationWhereInputObjectSchema.optional(), cursor: IntegrationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), IntegrationCountAggregateInputObjectSchema ]).optional() }).strict();