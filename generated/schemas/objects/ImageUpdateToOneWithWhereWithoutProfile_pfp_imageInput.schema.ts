import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './ImageWhereInput.schema';
import { ImageUpdateWithoutProfile_pfp_imageInputObjectSchema as ImageUpdateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUpdateWithoutProfile_pfp_imageInput.schema';
import { ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema as ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema } from './ImageUncheckedUpdateWithoutProfile_pfp_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ImageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ImageUpdateWithoutProfile_pfp_imageInputObjectSchema), z.lazy(() => ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema)])
}).strict();
export const ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInput>;
export const ImageUpdateToOneWithWhereWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
