import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateWithoutProfile_header_imageInputObjectSchema as ImageCreateWithoutProfile_header_imageInputObjectSchema } from './ImageCreateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_header_imageInput.schema';
import { ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema as ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema } from './ImageCreateOrConnectWithoutProfile_header_imageInput.schema';
import { ImageUpsertWithoutProfile_header_imageInputObjectSchema as ImageUpsertWithoutProfile_header_imageInputObjectSchema } from './ImageUpsertWithoutProfile_header_imageInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateToOneWithWhereWithoutProfile_header_imageInputObjectSchema as ImageUpdateToOneWithWhereWithoutProfile_header_imageInputObjectSchema } from './ImageUpdateToOneWithWhereWithoutProfile_header_imageInput.schema';
import { ImageUpdateWithoutProfile_header_imageInputObjectSchema as ImageUpdateWithoutProfile_header_imageInputObjectSchema } from './ImageUpdateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedUpdateWithoutProfile_header_imageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema).optional(),
  upsert: z.lazy(() => ImageUpsertWithoutProfile_header_imageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ImageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ImageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ImageUpdateToOneWithWhereWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUpdateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfile_header_imageInputObjectSchema)]).optional()
}).strict();
export const ImageUpdateOneWithoutProfile_header_imageNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateOneWithoutProfile_header_imageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateOneWithoutProfile_header_imageNestedInput>;
export const ImageUpdateOneWithoutProfile_header_imageNestedInputObjectZodSchema = makeSchema();
