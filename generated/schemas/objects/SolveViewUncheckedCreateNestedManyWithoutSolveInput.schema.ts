import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewCreateWithoutSolveInputObjectSchema as SolveViewCreateWithoutSolveInputObjectSchema } from './SolveViewCreateWithoutSolveInput.schema';
import { SolveViewUncheckedCreateWithoutSolveInputObjectSchema as SolveViewUncheckedCreateWithoutSolveInputObjectSchema } from './SolveViewUncheckedCreateWithoutSolveInput.schema';
import { SolveViewCreateOrConnectWithoutSolveInputObjectSchema as SolveViewCreateOrConnectWithoutSolveInputObjectSchema } from './SolveViewCreateOrConnectWithoutSolveInput.schema';
import { SolveViewCreateManySolveInputEnvelopeObjectSchema as SolveViewCreateManySolveInputEnvelopeObjectSchema } from './SolveViewCreateManySolveInputEnvelope.schema';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveViewCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewCreateWithoutSolveInputObjectSchema).array(), z.lazy(() => SolveViewUncheckedCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutSolveInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveViewCreateOrConnectWithoutSolveInputObjectSchema), z.lazy(() => SolveViewCreateOrConnectWithoutSolveInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveViewCreateManySolveInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveViewWhereUniqueInputObjectSchema), z.lazy(() => SolveViewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveViewUncheckedCreateNestedManyWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewUncheckedCreateNestedManyWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUncheckedCreateNestedManyWithoutSolveInput>;
export const SolveViewUncheckedCreateNestedManyWithoutSolveInputObjectZodSchema = makeSchema();
