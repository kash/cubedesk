import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateWithoutProfile_pfp_imageInputObjectSchema as ImageCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedCreateWithoutProfile_pfp_imageInput.schema';
import { ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema as ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema } from './ImageCreateOrConnectWithoutProfile_pfp_imageInput.schema';
import { ImageUpsertWithoutProfile_pfp_imageInputObjectSchema as ImageUpsertWithoutProfile_pfp_imageInputObjectSchema } from './ImageUpsertWithoutProfile_pfp_imageInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './ImageWhereUniqueInput.schema';
import { ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInputObjectSchema as ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInputObjectSchema } from './ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInput.schema';
import { ImageUpdateWithoutProfile_pfp_imageInputObjectSchema as ImageUpdateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUpdateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedUpdateWithoutProfile_pfp_imageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ImageCreateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedCreateWithoutProfile_pfp_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ImageCreateOrConnectWithoutProfile_pfp_imageInputObjectSchema).optional(),
  upsert: z.lazy(() => ImageUpsertWithoutProfile_pfp_imageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ImageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ImageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ImageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUpdateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema)]).optional()
}).strict();
export const ImageUpdateOneWithoutProfile_pfp_imageNestedInputObjectSchema: z.ZodType<Prisma.ImageUpdateOneWithoutProfile_pfp_imageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateOneWithoutProfile_pfp_imageNestedInput>;
export const ImageUpdateOneWithoutProfile_pfp_imageNestedInputObjectZodSchema = makeSchema();
