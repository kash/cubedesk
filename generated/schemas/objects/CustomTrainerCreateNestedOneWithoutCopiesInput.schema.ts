import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutCopiesInputObjectSchema as CustomTrainerCreateWithoutCopiesInputObjectSchema } from './CustomTrainerCreateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopiesInput.schema';
import { CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema as CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutCopiesInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomTrainerCreateNestedOneWithoutCopiesInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutCopiesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutCopiesInput>;
export const CustomTrainerCreateNestedOneWithoutCopiesInputObjectZodSchema = makeSchema();
