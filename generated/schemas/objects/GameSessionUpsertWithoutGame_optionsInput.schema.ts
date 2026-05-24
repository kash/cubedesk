import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionUpdateWithoutGame_optionsInputObjectSchema as GameSessionUpdateWithoutGame_optionsInputObjectSchema } from './GameSessionUpdateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedUpdateWithoutGame_optionsInput.schema';
import { GameSessionCreateWithoutGame_optionsInputObjectSchema as GameSessionCreateWithoutGame_optionsInputObjectSchema } from './GameSessionCreateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedCreateWithoutGame_optionsInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GameSessionUpdateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema)]),
  create: z.union([z.lazy(() => GameSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)]),
  where: z.lazy(() => GameSessionWhereInputObjectSchema).optional()
}).strict();
export const GameSessionUpsertWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionUpsertWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpsertWithoutGame_optionsInput>;
export const GameSessionUpsertWithoutGame_optionsInputObjectZodSchema = makeSchema();
