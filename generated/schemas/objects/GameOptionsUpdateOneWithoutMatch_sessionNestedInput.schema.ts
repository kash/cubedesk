import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsCreateWithoutMatch_sessionInputObjectSchema as GameOptionsCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedCreateWithoutMatch_sessionInput.schema';
import { GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema as GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema } from './GameOptionsCreateOrConnectWithoutMatch_sessionInput.schema';
import { GameOptionsUpsertWithoutMatch_sessionInputObjectSchema as GameOptionsUpsertWithoutMatch_sessionInputObjectSchema } from './GameOptionsUpsertWithoutMatch_sessionInput.schema';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema';
import { GameOptionsWhereUniqueInputObjectSchema as GameOptionsWhereUniqueInputObjectSchema } from './GameOptionsWhereUniqueInput.schema';
import { GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInputObjectSchema as GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInputObjectSchema } from './GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInput.schema';
import { GameOptionsUpdateWithoutMatch_sessionInputObjectSchema as GameOptionsUpdateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUpdateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedUpdateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameOptionsCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedCreateWithoutMatch_sessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameOptionsCreateOrConnectWithoutMatch_sessionInputObjectSchema).optional(),
  upsert: z.lazy(() => GameOptionsUpsertWithoutMatch_sessionInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameOptionsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameOptionsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameOptionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema)]).optional()
}).strict();
export const GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectSchema: z.ZodType<Prisma.GameOptionsUpdateOneWithoutMatch_sessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUpdateOneWithoutMatch_sessionNestedInput>;
export const GameOptionsUpdateOneWithoutMatch_sessionNestedInputObjectZodSchema = makeSchema();
