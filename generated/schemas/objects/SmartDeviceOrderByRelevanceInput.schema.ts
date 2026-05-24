import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceOrderByRelevanceFieldEnumSchema } from '../enums/SmartDeviceOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([SmartDeviceOrderByRelevanceFieldEnumSchema, SmartDeviceOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const SmartDeviceOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.SmartDeviceOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceOrderByRelevanceInput>;
export const SmartDeviceOrderByRelevanceInputObjectZodSchema = makeSchema();
