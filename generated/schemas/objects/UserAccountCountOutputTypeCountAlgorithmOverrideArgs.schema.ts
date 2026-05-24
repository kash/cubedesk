import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideWhereInputObjectSchema as AlgorithmOverrideWhereInputObjectSchema } from './AlgorithmOverrideWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountAlgorithmOverrideArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountAlgorithmOverrideArgsObjectZodSchema = makeSchema();
