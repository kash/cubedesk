import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutMatchInputObjectSchema as SolveCreateWithoutMatchInputObjectSchema } from './SolveCreateWithoutMatchInput.schema';
import { SolveUncheckedCreateWithoutMatchInputObjectSchema as SolveUncheckedCreateWithoutMatchInputObjectSchema } from './SolveUncheckedCreateWithoutMatchInput.schema';
import { SolveCreateOrConnectWithoutMatchInputObjectSchema as SolveCreateOrConnectWithoutMatchInputObjectSchema } from './SolveCreateOrConnectWithoutMatchInput.schema';
import { SolveCreateManyMatchInputEnvelopeObjectSchema as SolveCreateManyMatchInputEnvelopeObjectSchema } from './SolveCreateManyMatchInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutMatchInputObjectSchema), z.lazy(() => SolveCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyMatchInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveCreateNestedManyWithoutMatchInputObjectSchema: z.ZodType<Prisma.SolveCreateNestedManyWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedManyWithoutMatchInput>;
export const SolveCreateNestedManyWithoutMatchInputObjectZodSchema = makeSchema();
