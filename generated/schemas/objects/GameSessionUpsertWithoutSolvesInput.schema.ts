import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionUpdateWithoutSolvesInputObjectSchema as GameSessionUpdateWithoutSolvesInputObjectSchema } from './GameSessionUpdateWithoutSolvesInput.schema';
import { GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema as GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedUpdateWithoutSolvesInput.schema';
import { GameSessionCreateWithoutSolvesInputObjectSchema as GameSessionCreateWithoutSolvesInputObjectSchema } from './GameSessionCreateWithoutSolvesInput.schema';
import { GameSessionUncheckedCreateWithoutSolvesInputObjectSchema as GameSessionUncheckedCreateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedCreateWithoutSolvesInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GameSessionUpdateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema)]),
  create: z.union([z.lazy(() => GameSessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutSolvesInputObjectSchema)]),
  where: z.lazy(() => GameSessionWhereInputObjectSchema).optional()
}).strict();
export const GameSessionUpsertWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionUpsertWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpsertWithoutSolvesInput>;
export const GameSessionUpsertWithoutSolvesInputObjectZodSchema = makeSchema();
