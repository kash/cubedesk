import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutUserInputObjectSchema as SolveCreateWithoutUserInputObjectSchema } from './SolveCreateWithoutUserInput.schema';
import { SolveUncheckedCreateWithoutUserInputObjectSchema as SolveUncheckedCreateWithoutUserInputObjectSchema } from './SolveUncheckedCreateWithoutUserInput.schema';
import { SolveCreateOrConnectWithoutUserInputObjectSchema as SolveCreateOrConnectWithoutUserInputObjectSchema } from './SolveCreateOrConnectWithoutUserInput.schema';
import { SolveCreateManyUserInputEnvelopeObjectSchema as SolveCreateManyUserInputEnvelopeObjectSchema } from './SolveCreateManyUserInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutUserInputObjectSchema), z.lazy(() => SolveCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedManyWithoutUserInput>;
export const SolveCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
