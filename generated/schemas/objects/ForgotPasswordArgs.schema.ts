import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordSelectObjectSchema as ForgotPasswordSelectObjectSchema } from './ForgotPasswordSelect.schema';
import { ForgotPasswordIncludeObjectSchema as ForgotPasswordIncludeObjectSchema } from './ForgotPasswordInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ForgotPasswordSelectObjectSchema).optional(),
  include: z.lazy(() => ForgotPasswordIncludeObjectSchema).optional()
}).strict();
export const ForgotPasswordArgsObjectSchema = makeSchema();
export const ForgotPasswordArgsObjectZodSchema = makeSchema();
