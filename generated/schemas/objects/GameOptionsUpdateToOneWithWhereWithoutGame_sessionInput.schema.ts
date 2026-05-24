import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema';
import { GameOptionsUpdateWithoutGame_sessionInputObjectSchema as GameOptionsUpdateWithoutGame_sessionInputObjectSchema } from './GameOptionsUpdateWithoutGame_sessionInput.schema';
import { GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema as GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema } from './GameOptionsUncheckedUpdateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameOptionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameOptionsUpdateWithoutGame_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedUpdateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const GameOptionsUpdateToOneWithWhereWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsUpdateToOneWithWhereWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUpdateToOneWithWhereWithoutGame_sessionInput>;
export const GameOptionsUpdateToOneWithWhereWithoutGame_sessionInputObjectZodSchema = makeSchema();
