import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateUpdateWithoutUserInputObjectSchema as UserFeatureStateUpdateWithoutUserInputObjectSchema } from './UserFeatureStateUpdateWithoutUserInput.schema';
import { UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema as UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedUpdateWithoutUserInput.schema';
import { UserFeatureStateCreateWithoutUserInputObjectSchema as UserFeatureStateCreateWithoutUserInputObjectSchema } from './UserFeatureStateCreateWithoutUserInput.schema';
import { UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema as UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedCreateWithoutUserInput.schema';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './UserFeatureStateWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserFeatureStateUpdateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserFeatureStateCreateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => UserFeatureStateWhereInputObjectSchema).optional()
}).strict();
export const UserFeatureStateUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUpsertWithoutUserInput>;
export const UserFeatureStateUpsertWithoutUserInputObjectZodSchema = makeSchema();
