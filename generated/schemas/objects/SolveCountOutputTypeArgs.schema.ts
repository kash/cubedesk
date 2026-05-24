import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCountOutputTypeSelectObjectSchema as SolveCountOutputTypeSelectObjectSchema } from './SolveCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SolveCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SolveCountOutputTypeArgsObjectSchema = makeSchema();
export const SolveCountOutputTypeArgsObjectZodSchema = makeSchema();
