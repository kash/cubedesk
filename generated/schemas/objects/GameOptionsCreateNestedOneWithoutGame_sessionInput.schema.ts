import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsCreateWithoutGame_sessionInputObjectSchema as GameOptionsCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutGame_sessionInput.schema';
import { GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema as GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateOrConnectWithoutGame_sessionInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './GameOptionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameOptionsCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema).optional(),
  connect: z.lazy(() => GameOptionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameOptionsCreateNestedOneWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateNestedOneWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateNestedOneWithoutGame_sessionInput>;
export const GameOptionsCreateNestedOneWithoutGame_sessionInputObjectZodSchema = makeSchema();
