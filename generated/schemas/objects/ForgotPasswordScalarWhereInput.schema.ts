import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const forgotpasswordscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema), z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema), z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  claimed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ForgotPasswordScalarWhereInputObjectSchema: z.ZodType<Prisma.ForgotPasswordScalarWhereInput> = forgotpasswordscalarwhereinputSchema as unknown as z.ZodType<Prisma.ForgotPasswordScalarWhereInput>;
export const ForgotPasswordScalarWhereInputObjectZodSchema = forgotpasswordscalarwhereinputSchema;
