import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { ImageUpdateWithoutProfile_header_imageInputObjectSchema as ImageUpdateWithoutProfile_header_imageInputObjectSchema } from './ImageUpdateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedUpdateWithoutProfile_header_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ImageUpdateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema)])
}).strict();
export const ImageUpdateToOneWithWhereWithoutProfile_header_imageInputObjectSchema: z.ZodType<Prisma.ImageUpdateToOneWithWhereWithoutProfile_header_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateToOneWithWhereWithoutProfile_header_imageInput>;
export const ImageUpdateToOneWithWhereWithoutProfile_header_imageInputObjectZodSchema = makeSchema();
