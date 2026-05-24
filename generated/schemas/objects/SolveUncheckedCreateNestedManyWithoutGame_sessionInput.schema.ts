import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutGame_sessionInputObjectSchema as SolveCreateWithoutGame_sessionInputObjectSchema } from './SolveCreateWithoutGame_sessionInput.schema';
import { SolveUncheckedCreateWithoutGame_sessionInputObjectSchema as SolveUncheckedCreateWithoutGame_sessionInputObjectSchema } from './SolveUncheckedCreateWithoutGame_sessionInput.schema';
import { SolveCreateOrConnectWithoutGame_sessionInputObjectSchema as SolveCreateOrConnectWithoutGame_sessionInputObjectSchema } from './SolveCreateOrConnectWithoutGame_sessionInput.schema';
import { SolveCreateManyGame_sessionInputEnvelopeObjectSchema as SolveCreateManyGame_sessionInputEnvelopeObjectSchema } from './SolveCreateManyGame_sessionInputEnvelope.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveCreateWithoutGame_sessionInputObjectSchema).array(), z.lazy(() => SolveUncheckedCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutGame_sessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveCreateOrConnectWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveCreateOrConnectWithoutGame_sessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveCreateManyGame_sessionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveWhereUniqueInputObjectSchema), z.lazy(() => SolveWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.SolveUncheckedCreateNestedManyWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUncheckedCreateNestedManyWithoutGame_sessionInput>;
export const SolveUncheckedCreateNestedManyWithoutGame_sessionInputObjectZodSchema = makeSchema();
