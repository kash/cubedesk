import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema';
import { GameSessionUpdateWithoutSolvesInputObjectSchema as GameSessionUpdateWithoutSolvesInputObjectSchema } from './GameSessionUpdateWithoutSolvesInput.schema';
import { GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema as GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameSessionUpdateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema)])
}).strict();
export const GameSessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateToOneWithWhereWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateToOneWithWhereWithoutSolvesInput>;
export const GameSessionUpdateToOneWithWhereWithoutSolvesInputObjectZodSchema = makeSchema();
