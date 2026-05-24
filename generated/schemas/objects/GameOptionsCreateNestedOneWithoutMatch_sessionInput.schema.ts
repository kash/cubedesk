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
export const GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsCreateNestedOneWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsCreateNestedOneWithoutMatch_sessionInput>;
export const GameOptionsCreateNestedOneWithoutMatch_sessionInputObjectZodSchema = makeSchema();
