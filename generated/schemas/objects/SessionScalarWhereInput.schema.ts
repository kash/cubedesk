import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const sessionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const SessionScalarWhereInputObjectSchema: z.ZodType<Prisma.SessionScalarWhereInput> = sessionscalarwhereinputSchema as unknown as z.ZodType<Prisma.SessionScalarWhereInput>;
export const SessionScalarWhereInputObjectZodSchema = sessionscalarwhereinputSchema;
