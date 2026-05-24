import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationScalarWhereInputObjectSchema as NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';
import { NotificationUpdateManyMutationInputObjectSchema as NotificationUpdateManyMutationInputObjectSchema } from './NotificationUpdateManyMutationInput.schema';
import { NotificationUncheckedUpdateManyWithoutTriggering_userInputObjectSchema as NotificationUncheckedUpdateManyWithoutTriggering_userInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutTriggering_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NotificationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => NotificationUpdateManyMutationInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutTriggering_userInputObjectSchema)])
}).strict();
export const NotificationUpdateManyWithWhereWithoutTriggering_userInputObjectSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutTriggering_userInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutTriggering_userInput>;
export const NotificationUpdateManyWithWhereWithoutTriggering_userInputObjectZodSchema = makeSchema();
