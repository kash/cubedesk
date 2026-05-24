import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionOrderByRelevanceFieldEnumSchema } from '../enums/SessionOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([SessionOrderByRelevanceFieldEnumSchema, SessionOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const SessionOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.SessionOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByRelevanceInput>;
export const SessionOrderByRelevanceInputObjectZodSchema = makeSchema();
