import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameOptionsSelectObjectSchema as GameOptionsSelectObjectSchema } from './GameOptionsSelect.schema';
import { GameOptionsIncludeObjectSchema as GameOptionsIncludeObjectSchema } from './GameOptionsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GameOptionsSelectObjectSchema).optional(),
  include: z.lazy(() => GameOptionsIncludeObjectSchema).optional()
}).strict();
export const GameOptionsArgsObjectSchema = makeSchema();
export const GameOptionsArgsObjectZodSchema = makeSchema();
