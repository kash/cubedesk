import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EmailLogOrderByWithRelationInputObjectSchema as EmailLogOrderByWithRelationInputObjectSchema } from './objects/EmailLogOrderByWithRelationInput.schema';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './objects/EmailLogWhereInput.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './objects/EmailLogWhereUniqueInput.schema';
import { EmailLogCountAggregateInputObjectSchema as EmailLogCountAggregateInputObjectSchema } from './objects/EmailLogCountAggregateInput.schema';

export const EmailLogCountSchema: z.ZodType<Prisma.EmailLogCountArgs> = z.object({ orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmailLogCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.EmailLogCountArgs>;

export const EmailLogCountZodSchema = z.object({ orderBy: z.union([EmailLogOrderByWithRelationInputObjectSchema, EmailLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: EmailLogWhereInputObjectSchema.optional(), cursor: EmailLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), EmailLogCountAggregateInputObjectSchema ]).optional() }).strict();