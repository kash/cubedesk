import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUpdateWithoutCustom_trainer_downloadedInput.schema';
import { UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema as UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema } from './UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutCustom_trainer_downloadedInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutCustom_trainer_downloadedInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInput>;
export const UserAccountUpdateToOneWithWhereWithoutCustom_trainer_downloadedInputObjectZodSchema = makeSchema();
