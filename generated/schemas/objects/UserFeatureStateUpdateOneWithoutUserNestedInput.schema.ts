import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateCreateWithoutUserInputObjectSchema as UserFeatureStateCreateWithoutUserInputObjectSchema } from './UserFeatureStateCreateWithoutUserInput.schema';
import { UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema as UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedCreateWithoutUserInput.schema';
import { UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema as UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema } from './UserFeatureStateCreateOrConnectWithoutUserInput.schema';
import { UserFeatureStateUpsertWithoutUserInputObjectSchema as UserFeatureStateUpsertWithoutUserInputObjectSchema } from './UserFeatureStateUpsertWithoutUserInput.schema';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './UserFeatureStateWhereInput.schema';
import { UserFeatureStateWhereUniqueInputObjectSchema as UserFeatureStateWhereUniqueInputObjectSchema } from './UserFeatureStateWhereUniqueInput.schema';
import { UserFeatureStateUpdateToOneWithWhereWithoutUserInputObjectSchema as UserFeatureStateUpdateToOneWithWhereWithoutUserInputObjectSchema } from './UserFeatureStateUpdateToOneWithWhereWithoutUserInput.schema';
import { UserFeatureStateUpdateWithoutUserInputObjectSchema as UserFeatureStateUpdateWithoutUserInputObjectSchema } from './UserFeatureStateUpdateWithoutUserInput.schema';
import { UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema as UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserFeatureStateCreateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserFeatureStateCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => UserFeatureStateUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserFeatureStateWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserFeatureStateWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserFeatureStateWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserFeatureStateUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUpdateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const UserFeatureStateUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUpdateOneWithoutUserNestedInput>;
export const UserFeatureStateUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
