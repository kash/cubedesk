import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCountOutputTypeCountSolvesArgsObjectSchema as SessionCountOutputTypeCountSolvesArgsObjectSchema } from './SessionCountOutputTypeCountSolvesArgs.schema'

const makeSchema = () => z.object({
  solves: z.union([z.boolean(), z.lazy(() => SessionCountOutputTypeCountSolvesArgsObjectSchema)]).optional()
}).strict();
export const SessionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SessionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SessionCountOutputTypeSelect>;
export const SessionCountOutputTypeSelectObjectZodSchema = makeSchema();
