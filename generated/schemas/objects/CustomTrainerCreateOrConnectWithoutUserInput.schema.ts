import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateWithoutUserInputObjectSchema as CustomTrainerCreateWithoutUserInputObjectSchema } from './CustomTrainerCreateWithoutUserInput.schema';
import { CustomTrainerUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutUserInput>;
export const CustomTrainerCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
