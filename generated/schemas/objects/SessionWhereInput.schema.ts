import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { SolveListRelationFilterObjectSchema as SolveListRelationFilterObjectSchema } from './SolveListRelationFilter.schema'

const sessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveListRelationFilterObjectSchema).optional()
}).strict();
export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput> = sessionwhereinputSchema as unknown as z.ZodType<Prisma.SessionWhereInput>;
export const SessionWhereInputObjectZodSchema = sessionwhereinputSchema;
