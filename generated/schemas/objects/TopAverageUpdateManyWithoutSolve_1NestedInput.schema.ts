import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_1InputObjectSchema as TopAverageCreateWithoutSolve_1InputObjectSchema } from './TopAverageCreateWithoutSolve_1Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_1Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_1Input.schema';
import { TopAverageUpsertWithWhereUniqueWithoutSolve_1InputObjectSchema as TopAverageUpsertWithWhereUniqueWithoutSolve_1InputObjectSchema } from './TopAverageUpsertWithWhereUniqueWithoutSolve_1Input.schema';
import { TopAverageCreateManySolve_1InputEnvelopeObjectSchema as TopAverageCreateManySolve_1InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_1InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithWhereUniqueWithoutSolve_1InputObjectSchema as TopAverageUpdateWithWhereUniqueWithoutSolve_1InputObjectSchema } from './TopAverageUpdateWithWhereUniqueWithoutSolve_1Input.schema';
import { TopAverageUpdateManyWithWhereWithoutSolve_1InputObjectSchema as TopAverageUpdateManyWithWhereWithoutSolve_1InputObjectSchema } from './TopAverageUpdateManyWithWhereWithoutSolve_1Input.schema';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_1InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_1InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_1InputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_1InputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_1InputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUpdateManyWithoutSolve_1NestedInputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithoutSolve_1NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithoutSolve_1NestedInput>;
export const TopAverageUpdateManyWithoutSolve_1NestedInputObjectZodSchema = makeSchema();
