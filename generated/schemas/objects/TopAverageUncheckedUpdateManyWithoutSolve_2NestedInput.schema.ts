import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_2InputObjectSchema as TopAverageCreateWithoutSolve_2InputObjectSchema } from './TopAverageCreateWithoutSolve_2Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_2Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_2Input.schema';
import { TopAverageUpsertWithWhereUniqueWithoutSolve_2InputObjectSchema as TopAverageUpsertWithWhereUniqueWithoutSolve_2InputObjectSchema } from './TopAverageUpsertWithWhereUniqueWithoutSolve_2Input.schema';
import { TopAverageCreateManySolve_2InputEnvelopeObjectSchema as TopAverageCreateManySolve_2InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_2InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithWhereUniqueWithoutSolve_2InputObjectSchema as TopAverageUpdateWithWhereUniqueWithoutSolve_2InputObjectSchema } from './TopAverageUpdateWithWhereUniqueWithoutSolve_2Input.schema';
import { TopAverageUpdateManyWithWhereWithoutSolve_2InputObjectSchema as TopAverageUpdateManyWithWhereWithoutSolve_2InputObjectSchema } from './TopAverageUpdateManyWithWhereWithoutSolve_2Input.schema';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_2InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_2InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_2InputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_2InputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_2InputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUncheckedUpdateManyWithoutSolve_2NestedInputObjectSchema: z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutSolve_2NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutSolve_2NestedInput>;
export const TopAverageUncheckedUpdateManyWithoutSolve_2NestedInputObjectZodSchema = makeSchema();
