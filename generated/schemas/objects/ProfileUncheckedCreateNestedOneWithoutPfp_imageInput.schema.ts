import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutPfp_imageInputObjectSchema as ProfileCreateWithoutPfp_imageInputObjectSchema } from './ProfileCreateWithoutPfp_imageInput.schema';
import { ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema as ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutPfp_imageInput.schema';
import { ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema as ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema } from './ProfileCreateOrConnectWithoutPfp_imageInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutPfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutPfp_imageInput>;
export const ProfileUncheckedCreateNestedOneWithoutPfp_imageInputObjectZodSchema = makeSchema();
