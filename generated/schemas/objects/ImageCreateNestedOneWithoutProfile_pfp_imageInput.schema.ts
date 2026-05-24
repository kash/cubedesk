import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateWithoutProfile_pfp_imageInputObjectSchema as ImageCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_pfp_imageInput.schema';
import { ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema as ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateOrConnectWithoutProfile_pfp_imageInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema).optional(),
  connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional()
}).strict();
export const ImageCreateNestedOneWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageCreateNestedOneWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateNestedOneWithoutProfile_pfp_imageInput>;
export const ImageCreateNestedOneWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
