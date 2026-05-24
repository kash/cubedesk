import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageCreateWithoutSolve_3InputObjectSchema as TopAverageCreateWithoutSolve_3InputObjectSchema } from './TopAverageCreateWithoutSolve_3Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_3Input.schema';
import { TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema as TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema } from './TopAverageCreateOrConnectWithoutSolve_3Input.schema';
import { TopAverageUpsertWithWhereUniqueWithoutSolve_3InputObjectSchema as TopAverageUpsertWithWhereUniqueWithoutSolve_3InputObjectSchema } from './TopAverageUpsertWithWhereUniqueWithoutSolve_3Input.schema';
import { TopAverageCreateManySolve_3InputEnvelopeObjectSchema as TopAverageCreateManySolve_3InputEnvelopeObjectSchema } from './TopAverageCreateManySolve_3InputEnvelope.schema';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithWhereUniqueWithoutSolve_3InputObjectSchema as TopAverageUpdateWithWhereUniqueWithoutSolve_3InputObjectSchema } from './TopAverageUpdateWithWhereUniqueWithoutSolve_3Input.schema';
import { TopAverageUpdateManyWithWhereWithoutSolve_3InputObjectSchema as TopAverageUpdateManyWithWhereWithoutSolve_3InputObjectSchema } from './TopAverageUpdateManyWithWhereWithoutSolve_3Input.schema';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageCreateWithoutSolve_3InputObjectSchema).array(), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUpsertWithWhereUniqueWithoutSolve_3InputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopAverageCreateManySolve_3InputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopAverageWhereUniqueInputObjectSchema), z.lazy(() => TopAverageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUpdateWithWhereUniqueWithoutSolve_3InputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUpdateManyWithWhereWithoutSolve_3InputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopAverageScalarWhereInputObjectSchema), z.lazy(() => TopAverageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopAverageUncheckedUpdateManyWithoutSolve_3NestedInputObjectSchema: z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutSolve_3NestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUncheckedUpdateManyWithoutSolve_3NestedInput>;
export const TopAverageUncheckedUpdateManyWithoutSolve_3NestedInputObjectZodSchema = makeSchema();
