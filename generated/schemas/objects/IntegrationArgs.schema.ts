import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationSelectObjectSchema as IntegrationSelectObjectSchema } from './IntegrationSelect.schema';
import { IntegrationIncludeObjectSchema as IntegrationIncludeObjectSchema } from './IntegrationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => IntegrationSelectObjectSchema).optional(),
  include: z.lazy(() => IntegrationIncludeObjectSchema).optional()
}).strict();
export const IntegrationArgsObjectSchema = makeSchema();
export const IntegrationArgsObjectZodSchema = makeSchema();
