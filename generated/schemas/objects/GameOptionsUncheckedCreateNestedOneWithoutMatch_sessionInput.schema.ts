import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsCreateWithoutMatch_sessionInputObjectSchema as GameOptionsCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutMatch_sessionInput.schema';
import { GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema as GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateOrConnectWithoutMatch_sessionInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './GameOptionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameOptionsCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema).optional(),
  connect: z.lazy(() => GameOptionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInput>;
export const GameOptionsUncheckedCreateNestedOneWithoutMatch_sessionInputObjectZodSchema = makeSchema();
