import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutHeader_imageInputObjectSchema as ProfileUpdateWithoutHeader_imageInputObjectSchema } from './ProfileUpdateWithoutHeader_imageInput.schema';
import { ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema as ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedUpdateWithoutHeader_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutHeader_imageInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutHeader_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutHeader_imageInput>;
export const ProfileUpdateToOneWithWhereWithoutHeader_imageInputObjectZodSchema = makeSchema();
