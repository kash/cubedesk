import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './BanLogSelect.schema';
import { BanLogIncludeObjectSchema as BanLogIncludeObjectSchema } from './BanLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BanLogSelectObjectSchema).optional(),
  include: z.lazy(() => BanLogIncludeObjectSchema).optional()
}).strict();
export const BanLogArgsObjectSchema = makeSchema();
export const BanLogArgsObjectZodSchema = makeSchema();
