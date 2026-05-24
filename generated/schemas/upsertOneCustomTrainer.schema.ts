import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './objects/CustomTrainerInclude.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './objects/CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateInputObjectSchema as CustomTrainerCreateInputObjectSchema } from './objects/CustomTrainerCreateInput.schema';
import { CustomTrainerUncheckedCreateInputObjectSchema as CustomTrainerUncheckedCreateInputObjectSchema } from './objects/CustomTrainerUncheckedCreateInput.schema';
import { CustomTrainerUpdateInputObjectSchema as CustomTrainerUpdateInputObjectSchema } from './objects/CustomTrainerUpdateInput.schema';
import { CustomTrainerUncheckedUpdateInputObjectSchema as CustomTrainerUncheckedUpdateInputObjectSchema } from './objects/CustomTrainerUncheckedUpdateInput.schema';

export const CustomTrainerUpsertOneSchema: z.ZodType<Prisma.CustomTrainerUpsertArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), where: CustomTrainerWhereUniqueInputObjectSchema, create: z.union([ CustomTrainerCreateInputObjectSchema, CustomTrainerUncheckedCreateInputObjectSchema ]), update: z.union([ CustomTrainerUpdateInputObjectSchema, CustomTrainerUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CustomTrainerUpsertArgs>;

export const CustomTrainerUpsertOneZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), where: CustomTrainerWhereUniqueInputObjectSchema, create: z.union([ CustomTrainerCreateInputObjectSchema, CustomTrainerUncheckedCreateInputObjectSchema ]), update: z.union([ CustomTrainerUpdateInputObjectSchema, CustomTrainerUncheckedUpdateInputObjectSchema ]) }).strict();