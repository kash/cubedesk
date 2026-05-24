import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionCreateWithoutChat_messagesInputObjectSchema as MatchSessionCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema)])
}).strict();
export const MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutChat_messagesInput>;
export const MatchSessionCreateOrConnectWithoutChat_messagesInputObjectZodSchema = makeSchema();
