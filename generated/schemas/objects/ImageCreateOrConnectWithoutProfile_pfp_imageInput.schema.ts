import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageCreateWithoutProfile_pfp_imageInputObjectSchema as ImageCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_pfp_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema)])
}).strict();
export const ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageCreateOrConnectWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateOrConnectWithoutProfile_pfp_imageInput>;
export const ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
