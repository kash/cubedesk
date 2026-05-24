import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutHeader_imageInputObjectSchema as ProfileCreateWithoutHeader_imageInputObjectSchema } from './ProfileCreateWithoutHeader_imageInput.schema';
import { ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema as ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutHeader_imageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutHeader_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutHeader_imageInput>;
export const ProfileCreateOrConnectWithoutHeader_imageInputObjectZodSchema = makeSchema();
