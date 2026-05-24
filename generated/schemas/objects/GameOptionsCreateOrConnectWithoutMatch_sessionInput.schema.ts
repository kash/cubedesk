import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './GameOptionsWhereUniqueInput.schema';
import { GameOptionsCreateWithoutMatch_sessionInputObjectSchema as GameOptionsCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameOptionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GameOptionsCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateOrConnectWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateOrConnectWithoutMatch_sessionInput>;
export const GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectZodSchema = makeSchema();
