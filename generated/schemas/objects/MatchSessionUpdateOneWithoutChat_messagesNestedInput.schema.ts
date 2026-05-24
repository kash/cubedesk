import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutChat_messagesInputObjectSchema as MatchSessionCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutChat_messagesInput.schema';
import { MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema as MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema } from './MatchSessionCreateOrConnectWithoutChat_messagesInput.schema';
import { MatchSessionUpsertWithoutChat_messagesInputObjectSchema as MatchSessionUpsertWithoutChat_messagesInputObjectSchema } from './MatchSessionUpsertWithoutChat_messagesInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema as MatchSessionUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema } from './MatchSessionUpdateToOneWithWhereWithoutChat_messagesInput.schema';
import { MatchSessionUpdateWithoutChat_messagesInputObjectSchema as MatchSessionUpdateWithoutChat_messagesInputObjectSchema } from './MatchSessionUpdateWithoutChat_messagesInput.schema';
import { MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema as MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutChat_messagesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutChat_messagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchSessionCreateOrConnectWithoutChat_messagesInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchSessionUpsertWithoutChat_messagesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchSessionUpdateToOneWithWhereWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUpdateWithoutChat_messagesInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutChat_messagesInputObjectSchema)]).optional()
}).strict();
export const MatchSessionUpdateOneWithoutChat_messagesNestedInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateOneWithoutChat_messagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateOneWithoutChat_messagesNestedInput>;
export const MatchSessionUpdateOneWithoutChat_messagesNestedInputObjectZodSchema = makeSchema();
