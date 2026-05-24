import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutMatch_participationsInputObjectSchema as UserAccountUpdateWithoutMatch_participationsInputObjectSchema } from './UserAccountUpdateWithoutMatch_participationsInput.schema';
import { UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema as UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatch_participationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutMatch_participationsInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatch_participationsInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutMatch_participationsInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatch_participationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatch_participationsInput>;
export const UserAccountUpdateToOneWithWhereWithoutMatch_participationsInputObjectZodSchema = makeSchema();
