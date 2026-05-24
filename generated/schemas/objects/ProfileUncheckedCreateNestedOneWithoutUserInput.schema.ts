import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutUserInputObjectSchema as ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema';
import { ProfileUncheckedCreateWithoutUserInputObjectSchema as ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema';
import { ProfileCreateOrConnectWithoutUserInputObjectSchema as ProfileCreateOrConnectWithoutUserInputObjectSchema } from './ProfileCreateOrConnectWithoutUserInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput>;
export const ProfileUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
