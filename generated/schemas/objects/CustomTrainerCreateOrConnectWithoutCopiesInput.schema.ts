import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateWithoutCopiesInputObjectSchema as CustomTrainerCreateWithoutCopiesInputObjectSchema } from './CustomTrainerCreateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema)])
}).strict();
export const CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutCopiesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutCopiesInput>;
export const CustomTrainerCreateOrConnectWithoutCopiesInputObjectZodSchema = makeSchema();
