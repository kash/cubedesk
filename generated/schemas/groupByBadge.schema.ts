import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './objects/BadgeWhereInput.schema';
import { BadgeOrderByWithAggregationInputObjectSchema as BadgeOrderByWithAggregationInputObjectSchema } from './objects/BadgeOrderByWithAggregationInput.schema';
import { BadgeScalarWhereWithAggregatesInputObjectSchema as BadgeScalarWhereWithAggregatesInputObjectSchema } from './objects/BadgeScalarWhereWithAggregatesInput.schema';
import { BadgeScalarFieldEnumSchema } from './enums/BadgeScalarFieldEnum.schema';
import { BadgeCountAggregateInputObjectSchema as BadgeCountAggregateInputObjectSchema } from './objects/BadgeCountAggregateInput.schema';
import { BadgeMinAggregateInputObjectSchema as BadgeMinAggregateInputObjectSchema } from './objects/BadgeMinAggregateInput.schema';
import { BadgeMaxAggregateInputObjectSchema as BadgeMaxAggregateInputObjectSchema } from './objects/BadgeMaxAggregateInput.schema';

export const BadgeGroupBySchema: z.ZodType<Prisma.BadgeGroupByArgs> = z.object({ where: BadgeWhereInputObjectSchema.optional(), orderBy: z.union([BadgeOrderByWithAggregationInputObjectSchema, BadgeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BadgeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BadgeScalarFieldEnumSchema), _count: z.union([ z.literal(true), BadgeCountAggregateInputObjectSchema ]).optional(), _min: BadgeMinAggregateInputObjectSchema.optional(), _max: BadgeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.BadgeGroupByArgs>;

export const BadgeGroupByZodSchema = z.object({ where: BadgeWhereInputObjectSchema.optional(), orderBy: z.union([BadgeOrderByWithAggregationInputObjectSchema, BadgeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: BadgeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(BadgeScalarFieldEnumSchema), _count: z.union([ z.literal(true), BadgeCountAggregateInputObjectSchema ]).optional(), _min: BadgeMinAggregateInputObjectSchema.optional(), _max: BadgeMaxAggregateInputObjectSchema.optional() }).strict();