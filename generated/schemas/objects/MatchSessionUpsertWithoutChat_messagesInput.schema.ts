import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionUpdateWithoutChat_messagesInputObjectSchema as MatchSessionUpdateWithoutChat_messagesInputObjectSchema } from './MatchSessionUpdateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutChat_messagesInput.schema';
import { MatchSessionCreateWithoutChat_messagesInputObjectSchema as MatchSessionCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutChat_messagesInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchSessionUpdateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema)]),
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionUpsertWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.MatchSessionUpsertWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpsertWithoutChat_messagesInput>;
export const MatchSessionUpsertWithoutChat_messagesInputObjectZodSchema = makeSchema();
