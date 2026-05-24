import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateWithoutProfile_header_imageInputObjectSchema as ImageCreateWithoutProfile_header_imageInputObjectSchema } from './ImageCreateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_header_imageInput.schema';
import { ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema as ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema } from './ImageCreateOrConnectWithoutProfile_header_imageInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema).optional(),
  connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional()
}).strict();
export const ImageCreateNestedOneWithoutProfile_header_imageInputObjectSchema: z.ZodType<Prisma.ImageCreateNestedOneWithoutProfile_header_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateNestedOneWithoutProfile_header_imageInput>;
export const ImageCreateNestedOneWithoutProfile_header_imageInputObjectZodSchema = makeSchema();
