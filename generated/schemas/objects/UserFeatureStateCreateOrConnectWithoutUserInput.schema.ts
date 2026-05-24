import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './UserFeatureStateWhereUniqueInput.schema';
import { UserFeatureStateCreateWithoutUserInputObjectSchema as UserFeatureStateCreateWithoutUserInputObjectSchema } from './UserFeatureStateCreateWithoutUserInput.schema';
import { UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema as UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFeatureStateWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserFeatureStateCreateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFeatureStateCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateCreateOrConnectWithoutUserInput>;
export const UserFeatureStateCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
