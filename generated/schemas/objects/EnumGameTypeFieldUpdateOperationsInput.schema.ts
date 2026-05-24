import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema'

const makeSchema = () => z.object({
  set: GameTypeSchema.optional()
}).strict();
export const EnumGameTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGameTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGameTypeFieldUpdateOperationsInput>;
export const EnumGameTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
