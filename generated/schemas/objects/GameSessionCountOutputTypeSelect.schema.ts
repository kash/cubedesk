import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCountOutputTypeCountSolvesArgsObjectSchema as GameSessionCountOutputTypeCountSolvesArgsObjectSchema } from './GameSessionCountOutputTypeCountSolvesArgs.schema'

const makeSchema = () => z.object({
  solves: z.union([z.boolean(), z.lazy(() => GameSessionCountOutputTypeCountSolvesArgsObjectSchema)]).optional()
}).strict();
export const GameSessionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GameSessionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCountOutputTypeSelect>;
export const GameSessionCountOutputTypeSelectObjectZodSchema = makeSchema();
