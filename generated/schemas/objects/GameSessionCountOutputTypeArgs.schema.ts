import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCountOutputTypeSelectObjectSchema as GameSessionCountOutputTypeSelectObjectSchema } from './GameSessionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GameSessionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GameSessionCountOutputTypeArgsObjectSchema = makeSchema();
export const GameSessionCountOutputTypeArgsObjectZodSchema = makeSchema();
