import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestOrderByRelevanceFieldEnumSchema } from '../enums/FriendshipRequestOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([FriendshipRequestOrderByRelevanceFieldEnumSchema, FriendshipRequestOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const FriendshipRequestOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.FriendshipRequestOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestOrderByRelevanceInput>;
export const FriendshipRequestOrderByRelevanceInputObjectZodSchema = makeSchema();
