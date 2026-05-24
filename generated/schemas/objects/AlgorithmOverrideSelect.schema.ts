import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  rotate: z.boolean().optional(),
  cube_key: z.boolean().optional(),
  created_at: z.boolean().optional(),
  solution: z.boolean().optional(),
  name: z.boolean().optional(),
  scrambles: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const AlgorithmOverrideSelectObjectSchema: z.ZodType<Prisma.AlgorithmOverrideSelect> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideSelect>;
export const AlgorithmOverrideSelectObjectZodSchema = makeSchema();
