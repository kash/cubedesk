import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsCreateWithoutGame_sessionInputObjectSchema as GameOptionsCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutGame_sessionInput.schema';
import { GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema as GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema } from './GameOptionsCreateOrConnectWithoutGame_sessionInput.schema';
import { GameOptionsUpsertWithoutGame_sessionInputObjectSchema as GameOptionsUpsertWithoutGame_sessionInputObjectSchema } from './GameOptionsUpsertWithoutGame_sessionInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './GameOptionsWhereUniqueInput.schema';
import { GameOptionsUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema as GameOptionsUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema } from './GameOptionsUpdateToOneWithWhereWithoutGame_sessionInput.schema';
import { GameOptionsUpdateWithoutGame_sessionInputObjectSchema as GameOptionsUpdateWithoutGame_sessionInputObjectSchema } from './GameOptionsUpdateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedUpdateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameOptionsCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutGame_sessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameOptionsCreateOrConnectWithoutGame_sessionInputObjectSchema).optional(),
  upsert: z.lazy(() => GameOptionsUpsertWithoutGame_sessionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameOptionsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameOptionsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameOptionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameOptionsUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema)]).optional()
}).strict();
export const GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema: z.ZodType<Prisma.GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInput>;
export const GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectZodSchema = makeSchema();
