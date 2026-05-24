import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveCreateWithoutUserInputObjectSchema as TopSolveCreateWithoutUserInputObjectSchema } from './TopSolveCreateWithoutUserInput.schema';
import { TopSolveUncheckedCreateWithoutUserInputObjectSchema as TopSolveUncheckedCreateWithoutUserInputObjectSchema } from './TopSolveUncheckedCreateWithoutUserInput.schema';
import { TopSolveCreateOrConnectWithoutUserInputObjectSchema as TopSolveCreateOrConnectWithoutUserInputObjectSchema } from './TopSolveCreateOrConnectWithoutUserInput.schema';
import { TopSolveCreateManyUserInputEnvelopeObjectSchema as TopSolveCreateManyUserInputEnvelopeObjectSchema } from './TopSolveCreateManyUserInputEnvelope.schema';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopSolveCreateWithoutUserInputObjectSchema), z.lazy(() => TopSolveCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TopSolveUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopSolveCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TopSolveCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopSolveCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopSolveWhereUniqueInputObjectSchema), z.lazy(() => TopSolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopSolveUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUncheckedCreateNestedManyWithoutUserInput>;
export const TopSolveUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
