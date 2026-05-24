import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutHeader_imageInputObjectSchema as ProfileCreateWithoutHeader_imageInputObjectSchema } from './ProfileCreateWithoutHeader_imageInput.schema';
import { ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema as ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema } from './ProfileUncheckedCreateWithoutHeader_imageInput.schema';
import { ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema as ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema } from './ProfileCreateOrConnectWithoutHeader_imageInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutHeader_imageInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutHeader_imageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutHeader_imageInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutHeader_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutHeader_imageInput>;
export const ProfileUncheckedCreateNestedOneWithoutHeader_imageInputObjectZodSchema = makeSchema();
