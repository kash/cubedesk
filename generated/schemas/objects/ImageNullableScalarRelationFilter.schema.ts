import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ImageWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ImageWhereInputObjectSchema).optional().nullable()
}).strict();
export const ImageNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ImageNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ImageNullableScalarRelationFilter>;
export const ImageNullableScalarRelationFilterObjectZodSchema = makeSchema();
