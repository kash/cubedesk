import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateWithoutViewerInputObjectSchema as SolveViewCreateWithoutViewerInputObjectSchema } from './SolveViewCreateWithoutViewerInput.schema';
import { SolveViewUncheckedCreateWithoutViewerInputObjectSchema as SolveViewUncheckedCreateWithoutViewerInputObjectSchema } from './SolveViewUncheckedCreateWithoutViewerInput.schema';
import { SolveViewCreateOrConnectWithoutViewerInputObjectSchema as SolveViewCreateOrConnectWithoutViewerInputObjectSchema } from './SolveViewCreateOrConnectWithoutViewerInput.schema';
import { SolveViewCreateManyViewerInputEnvelopeObjectSchema as SolveViewCreateManyViewerInputEnvelopeObjectSchema } from './SolveViewCreateManyViewerInputEnvelope.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveViewCreateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewCreateWithoutViewerInputObjectSchema).array(), z.lazy(() => SolveViewUncheckedCreateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutViewerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveViewCreateOrConnectWithoutViewerInputObjectSchema), z.lazy(() => SolveViewCreateOrConnectWithoutViewerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveViewCreateManyViewerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveViewCreateNestedManyWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewCreateNestedManyWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateNestedManyWithoutViewerInput>;
export const SolveViewCreateNestedManyWithoutViewerInputObjectZodSchema = makeSchema();
