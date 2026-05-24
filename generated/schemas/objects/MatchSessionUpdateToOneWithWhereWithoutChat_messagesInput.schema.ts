import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { MatchSessionUpdateWithoutChat_messagesInputObjectSchema as MatchSessionUpdateWithoutChat_messagesInputObjectSchema } from './MatchSessionUpdateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchSessionUpdateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema)])
}).strict();
export const MatchSessionUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateToOneWithWhereWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateToOneWithWhereWithoutChat_messagesInput>;
export const MatchSessionUpdateToOneWithWhereWithoutChat_messagesInputObjectZodSchema = makeSchema();
