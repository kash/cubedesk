import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionCreateWithoutMatchInputObjectSchema as GameSessionCreateWithoutMatchInputObjectSchema } from './GameSessionCreateWithoutMatchInput.schema';
import { GameSessionUncheckedCreateWithoutMatchInputObjectSchema as GameSessionUncheckedCreateWithoutMatchInputObjectSchema } from './GameSessionUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameSessionCreateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const GameSessionCreateOrConnectWithoutMatchInputObjectSchema: z.ZodType<Prisma.GameSessionCreateOrConnectWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateOrConnectWithoutMatchInput>;
export const GameSessionCreateOrConnectWithoutMatchInputObjectZodSchema = makeSchema();
