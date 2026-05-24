import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageUpdateWithoutProfile_header_imageInputObjectSchema as ImageUpdateWithoutProfile_header_imageInputObjectSchema } from './ImageUpdateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedUpdateWithoutProfile_header_imageInput.schema';
import { ImageCreateWithoutProfile_header_imageInputObjectSchema as ImageCreateWithoutProfile_header_imageInputObjectSchema } from './ImageCreateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_header_imageInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ImageUpdateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema)]),
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema)]),
  where: z.lazy(() => ImageWhereInputObjectSchema).optional()
}).strict();
export const ImageUpsertWithoutProfile_header_imageInputObjectSchema: z.ZodType<Prisma.ImageUpsertWithoutProfile_header_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpsertWithoutProfile_header_imageInput>;
export const ImageUpsertWithoutProfile_header_imageInputObjectZodSchema = makeSchema();
