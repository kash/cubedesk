import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  some: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  none: z.lazy(() => ImageWhereInputObjectSchema).optional()
}).strict();
export const ImageListRelationFilterObjectSchema: z.ZodType<Prisma.ImageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ImageListRelationFilter>;
export const ImageListRelationFilterObjectZodSchema = makeSchema();
