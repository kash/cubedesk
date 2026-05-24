import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordOrderByRelevanceFieldEnumSchema } from '../enums/ForgotPasswordOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ForgotPasswordOrderByRelevanceFieldEnumSchema, ForgotPasswordOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ForgotPasswordOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ForgotPasswordOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordOrderByRelevanceInput>;
export const ForgotPasswordOrderByRelevanceInputObjectZodSchema = makeSchema();
