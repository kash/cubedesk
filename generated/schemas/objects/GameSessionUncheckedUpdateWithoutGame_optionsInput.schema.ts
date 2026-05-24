import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { EnumGameTypeFieldUpdateOperationsInputObjectSchema as EnumGameTypeFieldUpdateOperationsInputObjectSchema } from './EnumGameTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SolveUncheckedUpdateManyWithoutGame_sessionNestedInputObjectSchema as SolveUncheckedUpdateManyWithoutGame_sessionNestedInputObjectSchema } from './SolveUncheckedUpdateManyWithoutGame_sessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  match_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  game_type: z.union([GameTypeSchema, z.lazy(() => EnumGameTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solve_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  total_time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveUncheckedUpdateManyWithoutGame_sessionNestedInputObjectSchema).optional()
}).strict();
export const GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.GameSessionUncheckedUpdateWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUncheckedUpdateWithoutGame_optionsInput>;
export const GameSessionUncheckedUpdateWithoutGame_optionsInputObjectZodSchema = makeSchema();
