import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewOrderByRelevanceFieldEnumSchema } from '../enums/ProfileViewOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ProfileViewOrderByRelevanceFieldEnumSchema, ProfileViewOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ProfileViewOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ProfileViewOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewOrderByRelevanceInput>;
export const ProfileViewOrderByRelevanceInputObjectZodSchema = makeSchema();
