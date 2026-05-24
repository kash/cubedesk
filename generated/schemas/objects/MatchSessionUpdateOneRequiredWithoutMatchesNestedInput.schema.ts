import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutMatchesInputObjectSchema as MatchSessionCreateWithoutMatchesInputObjectSchema } from './MatchSessionCreateWithoutMatchesInput.schema';
import { MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema as MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutMatchesInput.schema';
import { MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema as MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema } from './MatchSessionCreateOrConnectWithoutMatchesInput.schema';
import { MatchSessionUpsertWithoutMatchesInputObjectSchema as MatchSessionUpsertWithoutMatchesInputObjectSchema } from './MatchSessionUpsertWithoutMatchesInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionUpdateToOneWithWhereWithoutMatchesInputObjectSchema as MatchSessionUpdateToOneWithWhereWithoutMatchesInputObjectSchema } from './MatchSessionUpdateToOneWithWhereWithoutMatchesInput.schema';
import { MatchSessionUpdateWithoutMatchesInputObjectSchema as MatchSessionUpdateWithoutMatchesInputObjectSchema } from './MatchSessionUpdateWithoutMatchesInput.schema';
import { MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema as MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutMatchesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchSessionUpsertWithoutMatchesInputObjectSchema).optional(),
  connect: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchSessionUpdateToOneWithWhereWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUpdateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema)]).optional()
}).strict();
export const MatchSessionUpdateOneRequiredWithoutMatchesNestedInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateOneRequiredWithoutMatchesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateOneRequiredWithoutMatchesNestedInput>;
export const MatchSessionUpdateOneRequiredWithoutMatchesNestedInputObjectZodSchema = makeSchema();
