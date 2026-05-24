import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './objects/SmartDeviceSelect.schema';
import { SmartDeviceIncludeObjectSchema as SmartDeviceIncludeObjectSchema } from './objects/SmartDeviceInclude.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './objects/SmartDeviceWhereUniqueInput.schema';
import { SmartDeviceCreateInputObjectSchema as SmartDeviceCreateInputObjectSchema } from './objects/SmartDeviceCreateInput.schema';
import { SmartDeviceUncheckedCreateInputObjectSchema as SmartDeviceUncheckedCreateInputObjectSchema } from './objects/SmartDeviceUncheckedCreateInput.schema';
import { SmartDeviceUpdateInputObjectSchema as SmartDeviceUpdateInputObjectSchema } from './objects/SmartDeviceUpdateInput.schema';
import { SmartDeviceUncheckedUpdateInputObjectSchema as SmartDeviceUncheckedUpdateInputObjectSchema } from './objects/SmartDeviceUncheckedUpdateInput.schema';

export const SmartDeviceUpsertOneSchema: z.ZodType<Prisma.SmartDeviceUpsertArgs> = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), where: SmartDeviceWhereUniqueInputObjectSchema, create: z.union([ SmartDeviceCreateInputObjectSchema, SmartDeviceUncheckedCreateInputObjectSchema ]), update: z.union([ SmartDeviceUpdateInputObjectSchema, SmartDeviceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SmartDeviceUpsertArgs>;

export const SmartDeviceUpsertOneZodSchema = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), where: SmartDeviceWhereUniqueInputObjectSchema, create: z.union([ SmartDeviceCreateInputObjectSchema, SmartDeviceUncheckedCreateInputObjectSchema ]), update: z.union([ SmartDeviceUpdateInputObjectSchema, SmartDeviceUncheckedUpdateInputObjectSchema ]) }).strict();