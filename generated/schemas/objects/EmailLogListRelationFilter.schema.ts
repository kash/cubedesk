import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogWhereInputObjectSchema as EmailLogWhereInputObjectSchema } from './EmailLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => EmailLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => EmailLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => EmailLogWhereInputObjectSchema).optional()
}).strict();
export const EmailLogListRelationFilterObjectSchema: z.ZodType<Prisma.EmailLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogListRelationFilter>;
export const EmailLogListRelationFilterObjectZodSchema = makeSchema();
