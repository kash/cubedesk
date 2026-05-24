import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutViewsInputObjectSchema as ProfileCreateWithoutViewsInputObjectSchema } from './ProfileCreateWithoutViewsInput.schema';
import { ProfileUncheckedCreateWithoutViewsInputObjectSchema as ProfileUncheckedCreateWithoutViewsInputObjectSchema } from './ProfileUncheckedCreateWithoutViewsInput.schema';
import { ProfileCreateOrConnectWithoutViewsInputObjectSchema as ProfileCreateOrConnectWithoutViewsInputObjectSchema } from './ProfileCreateOrConnectWithoutViewsInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutViewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutViewsInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileCreateNestedOneWithoutViewsInputObjectSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutViewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateNestedOneWithoutViewsInput>;
export const ProfileCreateNestedOneWithoutViewsInputObjectZodSchema = makeSchema();
