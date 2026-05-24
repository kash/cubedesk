import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewCreateWithoutProfileInputObjectSchema as ProfileViewCreateWithoutProfileInputObjectSchema } from './ProfileViewCreateWithoutProfileInput.schema';
import { ProfileViewUncheckedCreateWithoutProfileInputObjectSchema as ProfileViewUncheckedCreateWithoutProfileInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const ProfileViewCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateOrConnectWithoutProfileInput>;
export const ProfileViewCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
