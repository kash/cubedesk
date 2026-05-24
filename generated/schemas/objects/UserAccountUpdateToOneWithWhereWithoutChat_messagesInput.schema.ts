import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutChat_messagesInputObjectSchema as UserAccountUpdateWithoutChat_messagesInputObjectSchema } from './UserAccountUpdateWithoutChat_messagesInput.schema';
import { UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema as UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema } from './UserAccountUncheckedUpdateWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutChat_messagesInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutChat_messagesInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutChat_messagesInput>;
export const UserAccountUpdateToOneWithWhereWithoutChat_messagesInputObjectZodSchema = makeSchema();
