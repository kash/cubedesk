import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutHeader_imageInputObjectSchema as ProfileUpdateWithoutHeader_imageInputObjectSchema } from './ProfileUpdateWithoutHeader_imageInput.schema';
import { ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema as ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedUpdateWithoutHeader_imageInput.schema';
import { ProfileCreateWithoutHeader_imageInputObjectSchema as ProfileCreateWithoutHeader_imageInputObjectSchema } from './ProfileCreateWithoutHeader_imageInput.schema';
import { ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema as ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutHeader_imageInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutHeader_imageInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutHeader_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutHeader_imageInput>;
export const ProfileUpsertWithoutHeader_imageInputObjectZodSchema = makeSchema();
