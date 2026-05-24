import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const forgotpasswordwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ForgotPasswordWhereInputObjectSchema), z.lazy(() => ForgotPasswordWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ForgotPasswordWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ForgotPasswordWhereInputObjectSchema), z.lazy(() => ForgotPasswordWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  claimed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const ForgotPasswordWhereInputObjectSchema: z.ZodType<Prisma.ForgotPasswordWhereInput> = forgotpasswordwhereinputSchema as unknown as z.ZodType<Prisma.ForgotPasswordWhereInput>;
export const ForgotPasswordWhereInputObjectZodSchema = forgotpasswordwhereinputSchema;
