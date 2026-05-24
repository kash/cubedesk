import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutChat_messagesInputObjectSchema as MatchSessionCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutChat_messagesInput.schema';
import { MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema as MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateOrConnectWithoutChat_messagesInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema).optional(),
  connect: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchSessionCreateNestedOneWithoutChat_messagesInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateNestedOneWithoutChat_messagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateNestedOneWithoutChat_messagesInput>;
export const MatchSessionCreateNestedOneWithoutChat_messagesInputObjectZodSchema = makeSchema();
