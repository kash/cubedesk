import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateWithoutViewerInputObjectSchema as SolveViewCreateWithoutViewerInputObjectSchema } from './SolveViewCreateWithoutViewerInput.schema';
import { SolveViewUncheckedCreateWithoutViewerInputObjectSchema as SolveViewUncheckedCreateWithoutViewerInputObjectSchema } from './SolveViewUncheckedCreateWithoutViewerInput.schema';
import { SolveViewCreateOrConnectWithoutViewerInputObjectSchema as SolveViewCreateOrConnectWithoutViewerInputObjectSchema } from './SolveViewCreateOrConnectWithoutViewerInput.schema';
import { SolveViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema as SolveViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema } from './SolveViewUpsertWithWhereUniqueWithoutViewerInput.schema';
import { SolveViewCreateManyViewerInputEnvelopeObjectSchema as SolveViewCreateManyViewerInputEnvelopeObjectSchema } from './SolveViewCreateManyViewerInputEnvelope.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema as SolveViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema } from './SolveViewUpdateWithWhereUniqueWithoutViewerInput.schema';
import { SolveViewUpdateManyWithWhereWithoutViewerInputObjectSchema as SolveViewUpdateManyWithWhereWithoutViewerInputObjectSchema } from './SolveViewUpdateManyWithWhereWithoutViewerInput.schema';
import { SolveViewScalarWhereInputObjectSchema as SolveViewScalarWhereInputObjectSchema } from './SolveViewScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveViewCreateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewCreateWithoutViewerInputObjectSchema).array(), z.lazy(() => SolveViewUncheckedCreateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutViewerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveViewCreateOrConnectWithoutViewerInputObjectSchema), z.lazy(() => SolveViewCreateOrConnectWithoutViewerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveViewCreateManyViewerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveViewUpdateManyWithWhereWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUpdateManyWithWhereWithoutViewerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveViewScalarWhereInputObjectSchema), z.lazy(() => SolveViewScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveViewUncheckedUpdateManyWithoutViewerNestedInputObjectSchema: z.ZodType<Prisma.SolveViewUncheckedUpdateManyWithoutViewerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUncheckedUpdateManyWithoutViewerNestedInput>;
export const SolveViewUncheckedUpdateManyWithoutViewerNestedInputObjectZodSchema = makeSchema();
