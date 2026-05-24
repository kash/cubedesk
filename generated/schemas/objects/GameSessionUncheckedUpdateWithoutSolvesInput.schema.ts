import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { EnumGameTypeFieldUpdateOperationsInputObjectSchema as EnumGameTypeFieldUpdateOperationsInputObjectSchema } from './EnumGameTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema as GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema } from './GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  match_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  game_type: z.union([GameTypeSchema, z.lazy(() => EnumGameTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solve_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  total_time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_options: z.lazy(() => GameOptionsUncheckedUpdateOneWithoutGame_sessionNestedInputObjectSchema).optional()
}).strict();
export const GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionUncheckedUpdateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUncheckedUpdateWithoutSolvesInput>;
export const GameSessionUncheckedUpdateWithoutSolvesInputObjectZodSchema = makeSchema();
