import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeOrderByWithRelationInputObjectSchema as CustomCubeTypeOrderByWithRelationInputObjectSchema } from './objects/CustomCubeTypeOrderByWithRelationInput.schema';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './objects/CustomCubeTypeWhereInput.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeCountAggregateInputObjectSchema as CustomCubeTypeCountAggregateInputObjectSchema } from './objects/CustomCubeTypeCountAggregateInput.schema';

export const CustomCubeTypeCountSchema: z.ZodType<Prisma.CustomCubeTypeCountArgs> = z.object({ orderBy: z.union([CustomCubeTypeOrderByWithRelationInputObjectSchema, CustomCubeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomCubeTypeWhereInputObjectSchema.optional(), cursor: CustomCubeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomCubeTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeCountArgs>;

export const CustomCubeTypeCountZodSchema = z.object({ orderBy: z.union([CustomCubeTypeOrderByWithRelationInputObjectSchema, CustomCubeTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: CustomCubeTypeWhereInputObjectSchema.optional(), cursor: CustomCubeTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), CustomCubeTypeCountAggregateInputObjectSchema ]).optional() }).strict();