import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionCreateWithoutSolvesInputObjectSchema as GameSessionCreateWithoutSolvesInputObjectSchema } from './GameSessionCreateWithoutSolvesInput.schema';
import { GameSessionUncheckedCreateWithoutSolvesInputObjectSchema as GameSessionUncheckedCreateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedCreateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameSessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutSolvesInputObjectSchema)])
}).strict();
export const GameSessionCreateOrConnectWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionCreateOrConnectWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateOrConnectWithoutSolvesInput>;
export const GameSessionCreateOrConnectWithoutSolvesInputObjectZodSchema = makeSchema();
