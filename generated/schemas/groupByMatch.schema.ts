import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchWhereInputObjectSchema as MatchWhereInputObjectSchema } from './objects/MatchWhereInput.schema';
import { MatchOrderByWithAggregationInputObjectSchema as MatchOrderByWithAggregationInputObjectSchema } from './objects/MatchOrderByWithAggregationInput.schema';
import { MatchScalarWhereWithAggregatesInputObjectSchema as MatchScalarWhereWithAggregatesInputObjectSchema } from './objects/MatchScalarWhereWithAggregatesInput.schema';
import { MatchScalarFieldEnumSchema } from './enums/MatchScalarFieldEnum.schema';
import { MatchCountAggregateInputObjectSchema as MatchCountAggregateInputObjectSchema } from './objects/MatchCountAggregateInput.schema';
import { MatchMinAggregateInputObjectSchema as MatchMinAggregateInputObjectSchema } from './objects/MatchMinAggregateInput.schema';
import { MatchMaxAggregateInputObjectSchema as MatchMaxAggregateInputObjectSchema } from './objects/MatchMaxAggregateInput.schema';

export const MatchGroupBySchema: z.ZodType<Prisma.MatchGroupByArgs> = z.object({ where: MatchWhereInputObjectSchema.optional(), orderBy: z.union([MatchOrderByWithAggregationInputObjectSchema, MatchOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MatchScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MatchScalarFieldEnumSchema), _count: z.union([ z.literal(true), MatchCountAggregateInputObjectSchema ]).optional(), _min: MatchMinAggregateInputObjectSchema.optional(), _max: MatchMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchGroupByArgs>;

export const MatchGroupByZodSchema = z.object({ where: MatchWhereInputObjectSchema.optional(), orderBy: z.union([MatchOrderByWithAggregationInputObjectSchema, MatchOrderByWithAggregationInputObjectSchema.array()]).optional(), having: MatchScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(MatchScalarFieldEnumSchema), _count: z.union([ z.literal(true), MatchCountAggregateInputObjectSchema ]).optional(), _min: MatchMinAggregateInputObjectSchema.optional(), _max: MatchMaxAggregateInputObjectSchema.optional() }).strict();