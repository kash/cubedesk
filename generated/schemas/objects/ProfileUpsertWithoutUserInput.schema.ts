import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileUpdateWithoutUserInputObjectSchema as ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema';
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema as ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema';
import { ProfileCreateWithoutUserInputObjectSchema as ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema';
import { ProfileUncheckedCreateWithoutUserInputObjectSchema as ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional()
}).strict();
export const ProfileUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpsertWithoutUserInput>;
export const ProfileUpsertWithoutUserInputObjectZodSchema = makeSchema();
