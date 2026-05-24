import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { EnumGameTypeFieldUpdateOperationsInputObjectSchema as EnumGameTypeFieldUpdateOperationsInputObjectSchema } from './EnumGameTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema as GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema } from './GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInput.schema';
import { SolveUncheckedUpdateManyWithoutGame_sessionNestedInputObjectSchema as SolveUncheckedUpdateManyWithoutGame_sessionNestedInputObjectSchema } from './SolveUncheckedUpdateManyWithoutGame_sessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_type: z.union([GameTypeSchema, z.lazy(() => EnumGameTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solve_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  total_time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_options: z.lazy(() => GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUncheckedUpdateManyWithoutGame_sessionNestedInputObjectSchema).optional()
}).strict();
export const GameSessionUncheckedUpdateWithoutMatchInputObjectSchema: z.ZodType<Prisma.GameSessionUncheckedUpdateWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUncheckedUpdateWithoutMatchInput>;
export const GameSessionUncheckedUpdateWithoutMatchInputObjectZodSchema = makeSchema();
