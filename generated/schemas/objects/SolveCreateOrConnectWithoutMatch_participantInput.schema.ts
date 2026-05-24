import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutMatch_participantInputObjectSchema as SolveCreateWithoutMatch_participantInputObjectSchema } from './SolveCreateWithoutMatch_participantInput.schema';
import { SolveUncheckedCreateWithoutMatch_participantInputObjectSchema as SolveUncheckedCreateWithoutMatch_participantInputObjectSchema } from './SolveUncheckedCreateWithoutMatch_participantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatch_participantInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutMatch_participantInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutMatch_participantInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutMatch_participantInput>;
export const SolveCreateOrConnectWithoutMatch_participantInputObjectZodSchema = makeSchema();
