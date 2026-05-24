import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileUpdateWithoutViewsInputObjectSchema as ProfileUpdateWithoutViewsInputObjectSchema } from './ProfileUpdateWithoutViewsInput.schema';
import { ProfileUncheckedUpdateWithoutViewsInputObjectSchema as ProfileUncheckedUpdateWithoutViewsInputObjectSchema } from './ProfileUncheckedUpdateWithoutViewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProfileUpdateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutViewsInputObjectSchema)])
}).strict();
export const ProfileUpdateToOneWithWhereWithoutViewsInputObjectSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutViewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutViewsInput>;
export const ProfileUpdateToOneWithWhereWithoutViewsInputObjectZodSchema = makeSchema();
