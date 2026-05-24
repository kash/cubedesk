import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordWhereInputObjectSchema as ForgotPasswordWhereInputObjectSchema } from './ForgotPasswordWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ForgotPasswordWhereInputObjectSchema).optional(),
  some: z.lazy(() => ForgotPasswordWhereInputObjectSchema).optional(),
  none: z.lazy(() => ForgotPasswordWhereInputObjectSchema).optional()
}).strict();
export const ForgotPasswordListRelationFilterObjectSchema: z.ZodType<Prisma.ForgotPasswordListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordListRelationFilter>;
export const ForgotPasswordListRelationFilterObjectZodSchema = makeSchema();
