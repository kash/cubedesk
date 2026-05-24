import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutHeader_imageInputObjectSchema as ProfileCreateWithoutHeader_imageInputObjectSchema } from './ProfileCreateWithoutHeader_imageInput.schema';
import { ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema as ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutHeader_imageInput.schema';
import { ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema as ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema } from './ProfileCreateOrConnectWithoutHeader_imageInput.schema';
import { ProfileUpsertWithoutHeader_imageInputObjectSchema as ProfileUpsertWithoutHeader_imageInputObjectSchema } from './ProfileUpsertWithoutHeader_imageInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutHeader_imageInputObjectSchema as ProfileUpdateToOneWithWhereWithoutHeader_imageInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutHeader_imageInput.schema';
import { ProfileUpdateWithoutHeader_imageInputObjectSchema as ProfileUpdateWithoutHeader_imageInputObjectSchema } from './ProfileUpdateWithoutHeader_imageInput.schema';
import { ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema as ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedUpdateWithoutHeader_imageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutHeader_imageInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUpdateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutHeader_imageInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutHeader_imageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneWithoutHeader_imageNestedInput>;
export const ProfileUpdateOneWithoutHeader_imageNestedInputObjectZodSchema = makeSchema();
