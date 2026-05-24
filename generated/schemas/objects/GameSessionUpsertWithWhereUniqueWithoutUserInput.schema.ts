import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateWithoutUserInputObjectSchema as GameSessionUpdateWithoutUserInputObjectSchema } from './GameSessionUpdateWithoutUserInput.schema';
import { GameSessionUncheckedUpdateWithoutUserInputObjectSchema as GameSessionUncheckedUpdateWithoutUserInputObjectSchema } from './GameSessionUncheckedUpdateWithoutUserInput.schema';
import { GameSessionCreateWithoutUserInputObjectSchema as GameSessionCreateWithoutUserInputObjectSchema } from './GameSessionCreateWithoutUserInput.schema';
import { GameSessionUncheckedCreateWithoutUserInputObjectSchema as GameSessionUncheckedCreateWithoutUserInputObjectSchema } from './GameSessionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GameSessionUpdateWithoutUserInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => GameSessionCreateWithoutUserInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GameSessionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GameSessionUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpsertWithWhereUniqueWithoutUserInput>;
export const GameSessionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
