import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateWithoutUserInputObjectSchema as GameSessionUpdateWithoutUserInputObjectSchema } from './GameSessionUpdateWithoutUserInput.schema';
import { GameSessionUncheckedUpdateWithoutUserInputObjectSchema as GameSessionUncheckedUpdateWithoutUserInputObjectSchema } from './GameSessionUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GameSessionUpdateWithoutUserInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const GameSessionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateWithWhereUniqueWithoutUserInput>;
export const GameSessionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
