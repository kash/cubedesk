import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionCreateWithoutUserInputObjectSchema as GameSessionCreateWithoutUserInputObjectSchema } from './GameSessionCreateWithoutUserInput.schema';
import { GameSessionUncheckedCreateWithoutUserInputObjectSchema as GameSessionUncheckedCreateWithoutUserInputObjectSchema } from './GameSessionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameSessionCreateWithoutUserInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GameSessionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.GameSessionCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateOrConnectWithoutUserInput>;
export const GameSessionCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
