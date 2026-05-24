import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionCreateWithoutGame_optionsInputObjectSchema as GameSessionCreateWithoutGame_optionsInputObjectSchema } from './GameSessionCreateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedCreateWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)])
}).strict();
export const GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionCreateOrConnectWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateOrConnectWithoutGame_optionsInput>;
export const GameSessionCreateOrConnectWithoutGame_optionsInputObjectZodSchema = makeSchema();
