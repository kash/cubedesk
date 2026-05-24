import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileOrderByRelevanceFieldEnumSchema } from '../enums/ProfileOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ProfileOrderByRelevanceFieldEnumSchema, ProfileOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ProfileOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ProfileOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByRelevanceInput>;
export const ProfileOrderByRelevanceInputObjectZodSchema = makeSchema();
