import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutAlgorithm_overrideInputObjectSchema as UserAccountCreateNestedOneWithoutAlgorithm_overrideInputObjectSchema } from './UserAccountCreateNestedOneWithoutAlgorithm_overrideInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  rotate: z.number().int().optional().nullable(),
  cube_key: z.string(),
  created_at: z.coerce.date().optional(),
  solution: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  scrambles: z.string().optional().nullable(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutAlgorithm_overrideInputObjectSchema)
}).strict();
export const AlgorithmOverrideCreateInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideCreateInput>;
export const AlgorithmOverrideCreateInputObjectZodSchema = makeSchema();
