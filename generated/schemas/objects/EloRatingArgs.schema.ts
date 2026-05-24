import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloRatingSelectObjectSchema as EloRatingSelectObjectSchema } from './EloRatingSelect.schema';
import { EloRatingIncludeObjectSchema as EloRatingIncludeObjectSchema } from './EloRatingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EloRatingSelectObjectSchema).optional(),
  include: z.lazy(() => EloRatingIncludeObjectSchema).optional()
}).strict();
export const EloRatingArgsObjectSchema = makeSchema();
export const EloRatingArgsObjectZodSchema = makeSchema();
