import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutViewsInputObjectSchema as ProfileUpdateWithoutViewsInputObjectSchema } from './ProfileUpdateWithoutViewsInput.schema';
import { ProfileUncheckedUpdateWithoutViewsInputObjectSchema as ProfileUncheckedUpdateWithoutViewsInputObjectSchema } from './ProfileUncheckedUpdateWithoutViewsInput.schema';
import { ProfileCreateWithoutViewsInputObjectSchema as ProfileCreateWithoutViewsInputObjectSchema } from './ProfileCreateWithoutViewsInput.schema';
import { ProfileUncheckedCreateWithoutViewsInputObjectSchema as ProfileUncheckedCreateWithoutViewsInputObjectSchema } from './ProfileUncheckedCreateWithoutViewsInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutViewsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutViewsInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutViewsInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutViewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutViewsInput>;
export const ProfileUpsertWithoutViewsInputObjectZodSchema = makeSchema();
