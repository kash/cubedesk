import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionUpdateWithoutCreated_byInputObjectSchema as MatchSessionUpdateWithoutCreated_byInputObjectSchema } from './MatchSessionUpdateWithoutCreated_byInput.schema';
import { MatchSessionUncheckedUpdateWithoutCreated_byInputObjectSchema as MatchSessionUncheckedUpdateWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutCreated_byInput.schema';
import { MatchSessionCreateWithoutCreated_byInputObjectSchema as MatchSessionCreateWithoutCreated_byInputObjectSchema } from './MatchSessionCreateWithoutCreated_byInput.schema';
import { MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema as MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MatchSessionUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutCreated_byInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const MatchSessionUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.MatchSessionUpsertWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpsertWithWhereUniqueWithoutCreated_byInput>;
export const MatchSessionUpsertWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
