import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionSelectObjectSchema as GameSessionSelectObjectSchema } from './GameSessionSelect.schema';
import { GameSessionIncludeObjectSchema as GameSessionIncludeObjectSchema } from './GameSessionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GameSessionSelectObjectSchema).optional(),
  include: z.lazy(() => GameSessionIncludeObjectSchema).optional()
}).strict();
export const GameSessionArgsObjectSchema = makeSchema();
export const GameSessionArgsObjectZodSchema = makeSchema();
