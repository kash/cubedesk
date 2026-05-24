import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateWithoutMatchInputObjectSchema as GameSessionUpdateWithoutMatchInputObjectSchema } from './GameSessionUpdateWithoutMatchInput.schema';
import { GameSessionUncheckedUpdateWithoutMatchInputObjectSchema as GameSessionUncheckedUpdateWithoutMatchInputObjectSchema } from './GameSessionUncheckedUpdateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GameSessionUpdateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutMatchInputObjectSchema)])
}).strict();
export const GameSessionUpdateWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateWithWhereUniqueWithoutMatchInput>;
export const GameSessionUpdateWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
