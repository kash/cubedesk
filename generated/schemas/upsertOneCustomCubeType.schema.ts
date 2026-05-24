import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';
import { CustomCubeTypeCreateInputObjectSchema as CustomCubeTypeCreateInputObjectSchema } from './objects/CustomCubeTypeCreateInput.schema';
import { CustomCubeTypeUncheckedCreateInputObjectSchema as CustomCubeTypeUncheckedCreateInputObjectSchema } from './objects/CustomCubeTypeUncheckedCreateInput.schema';
import { CustomCubeTypeUpdateInputObjectSchema as CustomCubeTypeUpdateInputObjectSchema } from './objects/CustomCubeTypeUpdateInput.schema';
import { CustomCubeTypeUncheckedUpdateInputObjectSchema as CustomCubeTypeUncheckedUpdateInputObjectSchema } from './objects/CustomCubeTypeUncheckedUpdateInput.schema';

export const CustomCubeTypeUpsertOneSchema: z.ZodType<Prisma.CustomCubeTypeUpsertArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema, create: z.union([ CustomCubeTypeCreateInputObjectSchema, CustomCubeTypeUncheckedCreateInputObjectSchema ]), update: z.union([ CustomCubeTypeUpdateInputObjectSchema, CustomCubeTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeUpsertArgs>;

export const CustomCubeTypeUpsertOneZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema, create: z.union([ CustomCubeTypeCreateInputObjectSchema, CustomCubeTypeUncheckedCreateInputObjectSchema ]), update: z.union([ CustomCubeTypeUpdateInputObjectSchema, CustomCubeTypeUncheckedUpdateInputObjectSchema ]) }).strict();