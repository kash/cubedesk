import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogOrderByWithRelationInputObjectSchema as EmailLogOrderByWithRelationInputObjectSchema } from './objects/EmailLogOrderByWithRelationInput.schema';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';
import { EmailLogCountAggregateInputObjectSchema as EmailLogCountAggregateInputObjectSchema } from './objects/EmailLogCountAggregateInput.schema';
import { EmailLogMinAggregateInputObjectSchema as EmailLogMinAggregateInputObjectSchema } from './objects/EmailLogMinAggregateInput.schema';
import { EmailLogMaxAggregateInputObjectSchema as EmailLogMaxAggregateInputObjectSchema } from './objects/EmailLogMaxAggregateInput.schema';

export const EmailLogAggregateSchema: z.ZodType<Prisma.EmailLogAggregateArgs> = z.object({ orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EmailLogCountAggregateInputObjectSchema ]).optional(), _min: EmailLogMinAggregateInputObjectSchema.optional(), _max: EmailLogMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogAggregateArgs>;

export const EmailLogAggregateZodSchema = z.object({ orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), EmailLogCountAggregateInputObjectSchema ]).optional(), _min: EmailLogMinAggregateInputObjectSchema.optional(), _max: EmailLogMaxAggregateInputObjectSchema.optional() }).strict();