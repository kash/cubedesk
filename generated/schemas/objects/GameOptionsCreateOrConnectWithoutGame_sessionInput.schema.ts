import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './GameOptionsWhereUniqueInput.schema';
import { GameOptionsCreateWithoutGame_sessionInputObjectSchema as GameOptionsCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameOptionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameOptionsCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateOrConnectWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateOrConnectWithoutGame_sessionInput>;
export const GameOptionsCreateOrConnectWithoutGame_sessionInputObjectZodSchema = makeSchema();
