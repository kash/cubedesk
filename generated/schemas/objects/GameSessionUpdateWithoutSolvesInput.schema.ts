import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GameTypeSchema } from '../enums/GameType.schema';
import { EnumGameTypeFieldUpdateOperationsInputObjectSchema as EnumGameTypeFieldUpdateOperationsInputObjectSchema } from './EnumGameTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GameOptionsUpdateOneWithoutGame_sessionNestedInputObjectSchema as GameOptionsUpdateOneWithoutGame_sessionNestedInputObjectSchema } from './GameOptionsUpdateOneWithoutGame_sessionNestedInput.schema';
import { MatchUpdateOneWithoutGame_sessionNestedInputObjectSchema as MatchUpdateOneWithoutGame_sessionNestedInputObjectSchema } from './MatchUpdateOneWithoutGame_sessionNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_type: z.union([GameTypeSchema, z.lazy(() => EnumGameTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solve_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  total_time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  game_options: z.lazy(() => GameOptionsUpdateOneWithoutGame_sessionNestedInputObjectSchema).optional(),
  match: z.lazy(() => MatchUpdateOneWithoutGame_sessionNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutGame_sessionsNestedInputObjectSchema).optional()
}).strict();
export const GameSessionUpdateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateWithoutSolvesInput>;
export const GameSessionUpdateWithoutSolvesInputObjectZodSchema = makeSchema();
