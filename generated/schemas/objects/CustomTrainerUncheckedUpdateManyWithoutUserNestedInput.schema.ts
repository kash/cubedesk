import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutUserInputObjectSchema as CustomTrainerCreateWithoutUserInputObjectSchema } from './CustomTrainerCreateWithoutUserInput.schema';
import { CustomTrainerUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutUserInput.schema';
import { CustomTrainerCreateOrConnectWithoutUserInputObjectSchema as CustomTrainerCreateOrConnectWithoutUserInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutUserInput.schema';
import { CustomTrainerUpsertWithWhereUniqueWithoutUserInputObjectSchema as CustomTrainerUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CustomTrainerUpsertWithWhereUniqueWithoutUserInput.schema';
import { CustomTrainerCreateManyUserInputEnvelopeObjectSchema as CustomTrainerCreateManyUserInputEnvelopeObjectSchema } from './CustomTrainerCreateManyUserInputEnvelope.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateWithWhereUniqueWithoutUserInputObjectSchema as CustomTrainerUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CustomTrainerUpdateWithWhereUniqueWithoutUserInput.schema';
import { CustomTrainerUpdateManyWithWhereWithoutUserInputObjectSchema as CustomTrainerUpdateManyWithWhereWithoutUserInputObjectSchema } from './CustomTrainerUpdateManyWithWhereWithoutUserInput.schema';
import { CustomTrainerScalarWhereInputObjectSchema as CustomTrainerScalarWhereInputObjectSchema } from './CustomTrainerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CustomTrainerUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomTrainerUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomTrainerUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomTrainerUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomTrainerScalarWhereInputObjectSchema), z.lazy(() => CustomTrainerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUncheckedUpdateManyWithoutUserNestedInput>;
export const CustomTrainerUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
