import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const customcubetypescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema), z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema), z.lazy(() => CustomCubeTypeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  scramble: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  private: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const CustomCubeTypeScalarWhereInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeScalarWhereInput> = customcubetypescalarwhereinputSchema as unknown as z.ZodType<Prisma.CustomCubeTypeScalarWhereInput>;
export const CustomCubeTypeScalarWhereInputObjectZodSchema = customcubetypescalarwhereinputSchema;
