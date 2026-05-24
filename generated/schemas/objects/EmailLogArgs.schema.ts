import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogSelectObjectSchema as EmailLogSelectObjectSchema } from './EmailLogSelect.schema';
import { EmailLogIncludeObjectSchema as EmailLogIncludeObjectSchema } from './EmailLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EmailLogSelectObjectSchema).optional(),
  include: z.lazy(() => EmailLogIncludeObjectSchema).optional()
}).strict();
export const EmailLogArgsObjectSchema = makeSchema();
export const EmailLogArgsObjectZodSchema = makeSchema();
