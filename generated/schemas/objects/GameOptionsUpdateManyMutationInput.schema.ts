import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { EnumGameTypeFieldUpdateOperationsInputObjectSchema as EnumGameTypeFieldUpdateOperationsInputObjectSchema } from './EnumGameTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_type: z.union([GameTypeSchema, z.lazy(() => EnumGameTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  cube_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  elimination_starting_time_seconds: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  elimination_percent_change_rate: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  head_to_head_target_win_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  gauntlet_time_multiplier: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const GameOptionsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.GameOptionsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsUpdateManyMutationInput>;
export const GameOptionsUpdateManyMutationInputObjectZodSchema = makeSchema();
