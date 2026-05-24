import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutPfp_imageInputObjectSchema as ProfileCreateWithoutPfp_imageInputObjectSchema } from './ProfileCreateWithoutPfp_imageInput.schema';
import { ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema as ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutPfp_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutPfp_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutPfp_imageInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutPfp_imageInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutPfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutPfp_imageInput>;
export const ProfileCreateOrConnectWithoutPfp_imageInputObjectZodSchema = makeSchema();
