import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema';
import { GameSessionUpdateWithoutGame_optionsInputObjectSchema as GameSessionUpdateWithoutGame_optionsInputObjectSchema } from './GameSessionUpdateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedUpdateWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameSessionUpdateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema)])
}).strict();
export const GameSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateToOneWithWhereWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateToOneWithWhereWithoutGame_optionsInput>;
export const GameSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectZodSchema = makeSchema();
