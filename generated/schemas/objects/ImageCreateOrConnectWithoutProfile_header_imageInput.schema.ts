import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutProfile_header_imageInputObjectSchema as ImageCreateWithoutProfile_header_imageInputObjectSchema } from './ImageCreateWithoutProfile_header_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_header_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_header_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_header_imageInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutProfile_header_imageInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutProfile_header_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutProfile_header_imageInput>;
export const ImageCreateOrConnectWithoutProfile_header_imageInputObjectZodSchema = makeSchema();
