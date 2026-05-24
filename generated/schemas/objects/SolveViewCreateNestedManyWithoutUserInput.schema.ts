import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateWithoutUserInputObjectSchema as SolveViewCreateWithoutUserInputObjectSchema } from './SolveViewCreateWithoutUserInput.schema';
import { SolveViewUncheckedCreateWithoutUserInputObjectSchema as SolveViewUncheckedCreateWithoutUserInputObjectSchema } from './SolveViewUncheckedCreateWithoutUserInput.schema';
import { SolveViewCreateOrConnectWithoutUserInputObjectSchema as SolveViewCreateOrConnectWithoutUserInputObjectSchema } from './SolveViewCreateOrConnectWithoutUserInput.schema';
import { SolveViewCreateManyUserInputEnvelopeObjectSchema as SolveViewCreateManyUserInputEnvelopeObjectSchema } from './SolveViewCreateManyUserInputEnvelope.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveViewCreateWithoutUserInputObjectSchema), z.lazy(() => SolveViewCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SolveViewUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveViewCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SolveViewCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveViewCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveViewCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveViewCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateNestedManyWithoutUserInput>;
export const SolveViewCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
