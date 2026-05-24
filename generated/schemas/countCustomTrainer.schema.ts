import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerOrderByWithRelationInputObjectSchema as CustomTrainerOrderByWithRelationInputObjectSchema } from './objects/CustomTrainerOrderByWithRelationInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './objects/CustomTrainerWhereInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './objects/CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCountAggregateInputObjectSchema as CustomTrainerCountAggregateInputObjectSchema } from './objects/CustomTrainerCountAggregateInput.schema';

export const CustomTrainerCountSchema: z.ZodType<Prisma.CustomTrainerCountArgs> = z.object({ orderBy: z.union([CustomTrainerOrderByWithRelationInputObjectSchema, CustomTrainerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerWhereInputObjectSchema.optional(), cursor: CustomTrainerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomTrainerCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerCountArgs>;

export const CustomTrainerCountZodSchema = z.object({ orderBy: z.union([CustomTrainerOrderByWithRelationInputObjectSchema, CustomTrainerOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomTrainerWhereInputObjectSchema.optional(), cursor: CustomTrainerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomTrainerCountAggregateInputObjectSchema ]).optional() }).strict();