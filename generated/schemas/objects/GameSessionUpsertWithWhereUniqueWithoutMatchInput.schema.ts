import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateWithoutMatchInputObjectSchema as GameSessionUpdateWithoutMatchInputObjectSchema } from './GameSessionUpdateWithoutMatchInput.schema';
import { GameSessionUncheckedUpdateWithoutMatchInputObjectSchema as GameSessionUncheckedUpdateWithoutMatchInputObjectSchema } from './GameSessionUncheckedUpdateWithoutMatchInput.schema';
import { GameSessionCreateWithoutMatchInputObjectSchema as GameSessionCreateWithoutMatchInputObjectSchema } from './GameSessionCreateWithoutMatchInput.schema';
import { GameSessionUncheckedCreateWithoutMatchInputObjectSchema as GameSessionUncheckedCreateWithoutMatchInputObjectSchema } from './GameSessionUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GameSessionUpdateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutMatchInputObjectSchema)]),
  create: z.union([z.lazy(() => GameSessionCreateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const GameSessionUpsertWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.GameSessionUpsertWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpsertWithWhereUniqueWithoutMatchInput>;
export const GameSessionUpsertWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
