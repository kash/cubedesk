import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutUserInputObjectSchema as CustomTrainerCreateWithoutUserInputObjectSchema } from './CustomTrainerCreateWithoutUserInput.schema';
import { CustomTrainerUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutUserInput.schema';
import { CustomTrainerCreateOrConnectWithoutUserInputObjectSchema as CustomTrainerCreateOrConnectWithoutUserInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutUserInput.schema';
import { CustomTrainerCreateManyUserInputEnvelopeObjectSchema as CustomTrainerCreateManyUserInputEnvelopeObjectSchema } from './CustomTrainerCreateManyUserInputEnvelope.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CustomTrainerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUncheckedCreateNestedManyWithoutUserInput>;
export const CustomTrainerUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
