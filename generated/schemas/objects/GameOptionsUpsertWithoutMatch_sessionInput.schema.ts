import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsUpdateWithoutMatch_sessionInputObjectSchema as GameOptionsUpdateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUpdateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedUpdateWithoutMatch_sessionInput.schema';
import { GameOptionsCreateWithoutMatch_sessionInputObjectSchema as GameOptionsCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutMatch_sessionInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GameOptionsUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema)]),
  create: z.union([z.lazy(() => GameOptionsCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema)]),
  where: z.lazy(() => GameOptionsWhereInputObjectSchema).optional()
}).strict();
export const GameOptionsUpsertWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsUpsertWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUpsertWithoutMatch_sessionInput>;
export const GameOptionsUpsertWithoutMatch_sessionInputObjectZodSchema = makeSchema();
