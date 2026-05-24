import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutPfp_imageInputObjectSchema as ProfileCreateWithoutPfp_imageInputObjectSchema } from './ProfileCreateWithoutPfp_imageInput.schema';
import { ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema as ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutPfp_imageInput.schema';
import { ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema as ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema } from './ProfileCreateOrConnectWithoutPfp_imageInput.schema';
import { ProfileUpsertWithoutPfp_imageInputObjectSchema as ProfileUpsertWithoutPfp_imageInputObjectSchema } from './ProfileUpsertWithoutPfp_imageInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutPfp_imageInputObjectSchema as ProfileUpdateToOneWithWhereWithoutPfp_imageInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutPfp_imageInput.schema';
import { ProfileUpdateWithoutPfp_imageInputObjectSchema as ProfileUpdateWithoutPfp_imageInputObjectSchema } from './ProfileUpdateWithoutPfp_imageInput.schema';
import { ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema as ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedUpdateWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutPfp_imageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUpdateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema)]).optional()
}).strict();
export const ProfileUncheckedUpdateOneWithoutPfp_imageNestedInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedUpdateOneWithoutPfp_imageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedUpdateOneWithoutPfp_imageNestedInput>;
export const ProfileUncheckedUpdateOneWithoutPfp_imageNestedInputObjectZodSchema = makeSchema();
