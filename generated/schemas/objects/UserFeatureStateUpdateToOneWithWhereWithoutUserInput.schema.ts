import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateWhereInputObjectSchema as UserFeatureStateWhereInputObjectSchema } from './UserFeatureStateWhereInput.schema';
import { UserFeatureStateUpdateWithoutUserInputObjectSchema as UserFeatureStateUpdateWithoutUserInputObjectSchema } from './UserFeatureStateUpdateWithoutUserInput.schema';
import { UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema as UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema } from './UserFeatureStateUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFeatureStateWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserFeatureStateUpdateWithoutUserInputObjectSchema), z.lazy(() => UserFeatureStateUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserFeatureStateUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUpdateToOneWithWhereWithoutUserInput>;
export const UserFeatureStateUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
