import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateWithoutCopy_ofInputObjectSchema as CustomTrainerCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateWithoutCopy_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopy_ofInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema)])
}).strict();
export const CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutCopy_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutCopy_ofInput>;
export const CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectZodSchema = makeSchema();
