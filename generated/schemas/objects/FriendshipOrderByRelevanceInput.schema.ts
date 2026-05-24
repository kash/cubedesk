import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipOrderByRelevanceFieldEnumSchema } from '../enums/FriendshipOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([FriendshipOrderByRelevanceFieldEnumSchema, FriendshipOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const FriendshipOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.FriendshipOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipOrderByRelevanceInput>;
export const FriendshipOrderByRelevanceInputObjectZodSchema = makeSchema();
