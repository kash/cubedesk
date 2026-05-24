import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationScalarWhereInputObjectSchema as NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';
import { NotificationUpdateManyMutationInputObjectSchema as NotificationUpdateManyMutationInputObjectSchema } from './NotificationUpdateManyMutationInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserInputObjectSchema as NotificationUncheckedUpdateManyWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateManyMutationInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput>;
export const NotificationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
