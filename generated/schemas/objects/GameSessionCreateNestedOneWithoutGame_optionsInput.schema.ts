import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutGame_optionsInputObjectSchema as GameSessionCreateWithoutGame_optionsInputObjectSchema } from './GameSessionCreateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedCreateWithoutGame_optionsInput.schema';
import { GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema as GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema } from './GameSessionCreateOrConnectWithoutGame_optionsInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema).optional(),
  connect: z.lazy(() => GameSessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameSessionCreateNestedOneWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionCreateNestedOneWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateNestedOneWithoutGame_optionsInput>;
export const GameSessionCreateNestedOneWithoutGame_optionsInputObjectZodSchema = makeSchema();
