import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ForgotPasswordOrderByWithRelationInputObjectSchema as ForgotPasswordOrderByWithRelationInputObjectSchema } from './objects/ForgotPasswordOrderByWithRelationInput.schema';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './objects/ForgotPasswordWhereInput.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './objects/ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordCountAggregateInputObjectSchema as ForgotPasswordCountAggregateInputObjectSchema } from './objects/ForgotPasswordCountAggregateInput.schema';

export const ForgotPasswordCountSchema: z.ZodType<Prisma.ForgotPasswordCountArgs> = z.object({ orderBy: z.union([ForgotPasswordOrderByWithRelationInputObjectSchema, ForgotPasswordOrderByWithRelationInputObjectSchema.array()]).optional(), where: ForgotPasswordWhereInputObjectSchema.optional(), cursor: ForgotPasswordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ForgotPasswordCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ForgotPasswordCountArgs>;

export const ForgotPasswordCountZodSchema = z.object({ orderBy: z.union([ForgotPasswordOrderByWithRelationInputObjectSchema, ForgotPasswordOrderByWithRelationInputObjectSchema.array()]).optional(), where: ForgotPasswordWhereInputObjectSchema.optional(), cursor: ForgotPasswordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ForgotPasswordCountAggregateInputObjectSchema ]).optional() }).strict();