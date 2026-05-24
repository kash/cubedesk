import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ImageOrderByWithRelationInputObjectSchema as ImageOrderByWithRelationInputObjectSchema } from './objects/ImageOrderByWithRelationInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageCountAggregateInputObjectSchema as ImageCountAggregateInputObjectSchema } from './objects/ImageCountAggregateInput.schema';

export const ImageCountSchema: z.ZodType<Prisma.ImageCountArgs> = z.object({ orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ImageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ImageCountArgs>;

export const ImageCountZodSchema = z.object({ orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ImageCountAggregateInputObjectSchema ]).optional() }).strict();