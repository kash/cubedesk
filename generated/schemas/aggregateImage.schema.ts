import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageOrderByWithRelationInputObjectSchema as ImageOrderByWithRelationInputObjectSchema } from './objects/ImageOrderByWithRelationInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageCountAggregateInputObjectSchema as ImageCountAggregateInputObjectSchema } from './objects/ImageCountAggregateInput.schema';
import { ImageMinAggregateInputObjectSchema as ImageMinAggregateInputObjectSchema } from './objects/ImageMinAggregateInput.schema';
import { ImageMaxAggregateInputObjectSchema as ImageMaxAggregateInputObjectSchema } from './objects/ImageMaxAggregateInput.schema';

export const ImageAggregateSchema: z.ZodType<Prisma.ImageAggregateArgs> = z.object({ orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ImageCountAggregateInputObjectSchema ]).optional(), _min: ImageMinAggregateInputObjectSchema.optional(), _max: ImageMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ImageAggregateArgs>;

export const ImageAggregateZodSchema = z.object({ orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ImageCountAggregateInputObjectSchema ]).optional(), _min: ImageMinAggregateInputObjectSchema.optional(), _max: ImageMaxAggregateInputObjectSchema.optional() }).strict();