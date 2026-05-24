import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsUpdateWithoutGame_sessionInputObjectSchema as GameOptionsUpdateWithoutGame_sessionInputObjectSchema } from './GameOptionsUpdateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedUpdateWithoutGame_sessionInput.schema';
import { GameOptionsCreateWithoutGame_sessionInputObjectSchema as GameOptionsCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutGame_sessionInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GameOptionsUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema)]),
  create: z.union([z.lazy(() => GameOptionsCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema)]),
  where: z.lazy(() => GameOptionsWhereInputObjectSchema).optional()
}).strict();
export const GameOptionsUpsertWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsUpsertWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUpsertWithoutGame_sessionInput>;
export const GameOptionsUpsertWithoutGame_sessionInputObjectZodSchema = makeSchema();
