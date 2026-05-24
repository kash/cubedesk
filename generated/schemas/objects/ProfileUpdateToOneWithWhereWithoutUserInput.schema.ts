import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutUserInputObjectSchema as ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema';
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema as ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput>;
export const ProfileUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
