import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateCreateWithoutUserInputObjectSchema as UserFeatureStateCreateWithoutUserInputObjectSchema } from './UserFeatureStateCreateWithoutUserInput.schema';
import { UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema as UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedCreateWithoutUserInput.schema';
import { UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema as UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema } from './UserFeatureStateCreateOrConnectWithoutUserInput.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './UserFeatureStateWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserFeatureStateCreateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => UserFeatureStateWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserFeatureStateUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUncheckedCreateNestedOneWithoutUserInput>;
export const UserFeatureStateUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
