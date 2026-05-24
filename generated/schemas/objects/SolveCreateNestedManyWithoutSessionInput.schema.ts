import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSessionInputObjectSchema as SolveCreateWithoutSessionInputObjectSchema } from './SolveCreateWithoutSessionInput.schema';
import { SolveUncheckedCreateWithoutSessionInputObjectSchema as SolveUncheckedCreateWithoutSessionInputObjectSchema } from './SolveUncheckedCreateWithoutSessionInput.schema';
import { SolveCreateOrConnectWithoutSessionInputObjectSchema as SolveCreateOrConnectWithoutSessionInputObjectSchema } from './SolveCreateOrConnectWithoutSessionInput.schema';
import { SolveCreateManySessionInputEnvelopeObjectSchema as SolveCreateManySessionInputEnvelopeObjectSchema } from './SolveCreateManySessionInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSessionInputObjectSchema), z.lazy(() => SolveCreateWithoutSessionInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutSessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutSessionInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutSessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManySessionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveCreateNestedManyWithoutSessionInputObjectSchema: z.ZodType<Prisma.SolveCreateNestedManyWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedManyWithoutSessionInput>;
export const SolveCreateNestedManyWithoutSessionInputObjectZodSchema = makeSchema();
