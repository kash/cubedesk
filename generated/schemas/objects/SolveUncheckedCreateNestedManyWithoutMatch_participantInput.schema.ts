import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutMatch_participantInputObjectSchema as SolveCreateWithoutMatch_participantInputObjectSchema } from './SolveCreateWithoutMatch_participantInput.schema';
import { SolveUncheckedCreateWithoutMatch_participantInputObjectSchema as SolveUncheckedCreateWithoutMatch_participantInputObjectSchema } from './SolveUncheckedCreateWithoutMatch_participantInput.schema';
import { SolveCreateOrConnectWithoutMatch_participantInputObjectSchema as SolveCreateOrConnectWithoutMatch_participantInputObjectSchema } from './SolveCreateOrConnectWithoutMatch_participantInput.schema';
import { SolveCreateManyMatch_participantInputEnvelopeObjectSchema as SolveCreateManyMatch_participantInputEnvelopeObjectSchema } from './SolveCreateManyMatch_participantInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveCreateWithoutMatch_participantInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatch_participantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutMatch_participantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyMatch_participantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveUncheckedCreateNestedManyWithoutMatch_participantInputObjectSchema: z.ZodType<Prisma.SolveUncheckedCreateNestedManyWithoutMatch_participantInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUncheckedCreateNestedManyWithoutMatch_participantInput>;
export const SolveUncheckedCreateNestedManyWithoutMatch_participantInputObjectZodSchema = makeSchema();
