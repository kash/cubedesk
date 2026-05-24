import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutUserInputObjectSchema as TopAverageCreateWithoutUserInputObjectSchema } from './TopAverageCreateWithoutUserInput.schema';
import { TopAverageUncheckedCreateWithoutUserInputObjectSchema as TopAverageUncheckedCreateWithoutUserInputObjectSchema } from './TopAverageUncheckedCreateWithoutUserInput.schema';
import { TopAverageCreateOrConnectWithoutUserInputObjectSchema as TopAverageCreateOrConnectWithoutUserInputObjectSchema } from './TopAverageCreateOrConnectWithoutUserInput.schema';
import { TopAverageUpsertWithWhereUniqueWithoutUserInputObjectSchema as TopAverageUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TopAverageUpsertWithWhereUniqueWithoutUserInput.schema';
import { TopAverageCreateManyUserInputEnvelopeObjectSchema as TopAverageCreateManyUserInputEnvelopeObjectSchema } from './TopAverageCreateManyUserInputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithWhereUniqueWithoutUserInputObjectSchema as TopAverageUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TopAverageUpdateWithWhereUniqueWithoutUserInput.schema';
import { TopAverageUpdateManyWithWhereWithoutUserInputObjectSchema as TopAverageUpdateManyWithWhereWithoutUserInputObjectSchema } from './TopAverageUpdateManyWithWhereWithoutUserInput.schema';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutUserInputObjectSchema), z.lazy(() => TopAverageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopAverageUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TopAverageUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutUserNestedInput>;
export const TopAverageUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
