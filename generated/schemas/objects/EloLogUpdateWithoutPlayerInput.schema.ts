import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { MatchUpdateOneWithoutElo_logNestedInputObjectSchema as MatchUpdateOneWithoutElo_logNestedInputObjectSchema } from './MatchUpdateOneWithoutElo_logNestedInput.schema';
import { UserAccountUpdateOneWithoutElo_log_opponentNestedInputObjectSchema as UserAccountUpdateOneWithoutElo_log_opponentNestedInputObjectSchema } from './UserAccountUpdateOneWithoutElo_log_opponentNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  cube_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_change: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  opponent_new_elo_rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  opponent_new_game_count: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  player_new_elo_rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  player_new_game_count: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  refunded_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  match: z.lazy(() => MatchUpdateOneWithoutElo_logNestedInputObjectSchema).optional(),
  opponent: z.lazy(() => UserAccountUpdateOneWithoutElo_log_opponentNestedInputObjectSchema).optional()
}).strict();
export const EloLogUpdateWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogUpdateWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateWithoutPlayerInput>;
export const EloLogUpdateWithoutPlayerInputObjectZodSchema = makeSchema();
