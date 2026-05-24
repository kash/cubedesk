import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutViewsInputObjectSchema as ProfileCreateWithoutViewsInputObjectSchema } from './ProfileCreateWithoutViewsInput.schema';
import { ProfileUncheckedCreateWithoutViewsInputObjectSchema as ProfileUncheckedCreateWithoutViewsInputObjectSchema } from './ProfileUncheckedCreateWithoutViewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutViewsInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutViewsInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutViewsInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutViewsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutViewsInput>;
export const ProfileCreateOrConnectWithoutViewsInputObjectZodSchema = makeSchema();
