import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsWhereInputObjectSchema as GameOptionsWhereInputObjectSchema } from './GameOptionsWhereInput.schema';
import { GameOptionsUpdateWithoutMatch_sessionInputObjectSchema as GameOptionsUpdateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUpdateWithoutMatch_sessionInput.schema';
import { GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema as GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './GameOptionsUncheckedUpdateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameOptionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GameOptionsUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => GameOptionsUncheckedUpdateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInput>;
export const GameOptionsUpdateToOneWithWhereWithoutMatch_sessionInputObjectZodSchema = makeSchema();
