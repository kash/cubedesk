import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateWithoutSolveInputObjectSchema as SolveViewCreateWithoutSolveInputObjectSchema } from './SolveViewCreateWithoutSolveInput.schema';
import { SolveViewUncheckedCreateWithoutSolveInputObjectSchema as SolveViewUncheckedCreateWithoutSolveInputObjectSchema } from './SolveViewUncheckedCreateWithoutSolveInput.schema';
import { SolveViewCreateOrConnectWithoutSolveInputObjectSchema as SolveViewCreateOrConnectWithoutSolveInputObjectSchema } from './SolveViewCreateOrConnectWithoutSolveInput.schema';
import { SolveViewUpsertWithWhereUniqueWithoutSolveInputObjectSchema as SolveViewUpsertWithWhereUniqueWithoutSolveInputObjectSchema } from './SolveViewUpsertWithWhereUniqueWithoutSolveInput.schema';
import { SolveViewCreateManySolveInputEnvelopeObjectSchema as SolveViewCreateManySolveInputEnvelopeObjectSchema } from './SolveViewCreateManySolveInputEnvelope.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithWhereUniqueWithoutSolveInputObjectSchema as SolveViewUpdateWithWhereUniqueWithoutSolveInputObjectSchema } from './SolveViewUpdateWithWhereUniqueWithoutSolveInput.schema';
import { SolveViewUpdateManyWithWhereWithoutSolveInputObjectSchema as SolveViewUpdateManyWithWhereWithoutSolveInputObjectSchema } from './SolveViewUpdateManyWithWhereWithoutSolveInput.schema';
import { SolveViewScalarWhereInputObjectSchema as SolveViewScalarWhereInputObjectSchema } from './SolveViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveViewCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewCreateWithoutSolveInputObjectSchema).array(), z.lazy(() => SolveViewUncheckedCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutSolveInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveViewCreateOrConnectWithoutSolveInputObjectSchema), z.lazy(() => SolveViewCreateOrConnectWithoutSolveInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveViewUpsertWithWhereUniqueWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUpsertWithWhereUniqueWithoutSolveInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveViewCreateManySolveInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveViewUpdateWithWhereUniqueWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUpdateWithWhereUniqueWithoutSolveInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveViewUpdateManyWithWhereWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUpdateManyWithWhereWithoutSolveInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveViewScalarWhereInputObjectSchema), z.lazy(() => SolveViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveViewUpdateManyWithoutSolveNestedInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateManyWithoutSolveNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateManyWithoutSolveNestedInput>;
export const SolveViewUpdateManyWithoutSolveNestedInputObjectZodSchema = makeSchema();
