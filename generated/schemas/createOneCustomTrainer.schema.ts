import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './objects/CustomTrainerInclude.schema';
import { CustomTrainerCreateInputObjectSchema as CustomTrainerCreateInputObjectSchema } from './objects/CustomTrainerCreateInput.schema';
import { CustomTrainerUncheckedCreateInputObjectSchema as CustomTrainerUncheckedCreateInputObjectSchema } from './objects/CustomTrainerUncheckedCreateInput.schema';

export const CustomTrainerCreateOneSchema: z.ZodType<Prisma.CustomTrainerCreateArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), data: z.union([CustomTrainerCreateInputObjectSchema, CustomTrainerUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CustomTrainerCreateArgs>;

export const CustomTrainerCreateOneZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), data: z.union([CustomTrainerCreateInputObjectSchema, CustomTrainerUncheckedCreateInputObjectSchema]) }).strict();