import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutViewsInputObjectSchema as ProfileCreateWithoutViewsInputObjectSchema } from './ProfileCreateWithoutViewsInput.schema';
import { ProfileUncheckedCreateWithoutViewsInputObjectSchema as ProfileUncheckedCreateWithoutViewsInputObjectSchema } from './ProfileUncheckedCreateWithoutViewsInput.schema';
import { ProfileCreateOrConnectWithoutViewsInputObjectSchema as ProfileCreateOrConnectWithoutViewsInputObjectSchema } from './ProfileCreateOrConnectWithoutViewsInput.schema';
import { ProfileUpsertWithoutViewsInputObjectSchema as ProfileUpsertWithoutViewsInputObjectSchema } from './ProfileUpsertWithoutViewsInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutViewsInputObjectSchema as ProfileUpdateToOneWithWhereWithoutViewsInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutViewsInput.schema';
import { ProfileUpdateWithoutViewsInputObjectSchema as ProfileUpdateWithoutViewsInputObjectSchema } from './ProfileUpdateWithoutViewsInput.schema';
import { ProfileUncheckedUpdateWithoutViewsInputObjectSchema as ProfileUncheckedUpdateWithoutViewsInputObjectSchema } from './ProfileUncheckedUpdateWithoutViewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutViewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutViewsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutViewsInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutViewsInputObjectSchema), z.lazy(() => ProfileUpdateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutViewsInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneRequiredWithoutViewsNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutViewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutViewsNestedInput>;
export const ProfileUpdateOneRequiredWithoutViewsNestedInputObjectZodSchema = makeSchema();
