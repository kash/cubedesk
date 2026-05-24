import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { UserAccountUpdateWithoutMatches_wonInputObjectSchema as UserAccountUpdateWithoutMatches_wonInputObjectSchema } from './UserAccountUpdateWithoutMatches_wonInput.schema';
import { UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema as UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema } from './UserAccountUncheckedUpdateWithoutMatches_wonInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserAccountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserAccountUpdateWithoutMatches_wonInputObjectSchema), z.lazy(() => UserAccountUncheckedUpdateWithoutMatches_wonInputObjectSchema)])
}).strict();
export const UserAccountUpdateToOneWithWhereWithoutMatches_wonInputObjectSchema: z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatches_wonInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountUpdateToOneWithWhereWithoutMatches_wonInput>;
export const UserAccountUpdateToOneWithWhereWithoutMatches_wonInputObjectZodSchema = makeSchema();
