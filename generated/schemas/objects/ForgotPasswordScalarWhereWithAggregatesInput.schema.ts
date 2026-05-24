import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const forgotpasswordscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ForgotPasswordScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ForgotPasswordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ForgotPasswordScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ForgotPasswordScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ForgotPasswordScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  claimed: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ForgotPasswordScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ForgotPasswordScalarWhereWithAggregatesInput> = forgotpasswordscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ForgotPasswordScalarWhereWithAggregatesInput>;
export const ForgotPasswordScalarWhereWithAggregatesInputObjectZodSchema = forgotpasswordscalarwherewithaggregatesinputSchema;
