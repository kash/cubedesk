import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileCreateWithoutUserInputObjectSchema as ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema';
import { ProfileUncheckedCreateWithoutUserInputObjectSchema as ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ProfileCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateOrConnectWithoutUserInput>;
export const ProfileCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
