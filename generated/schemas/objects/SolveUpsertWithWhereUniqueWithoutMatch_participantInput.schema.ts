import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutMatch_participantInputObjectSchema as SolveUpdateWithoutMatch_participantInputObjectSchema } from './SolveUpdateWithoutMatch_participantInput.schema';
import { SolveUncheckedUpdateWithoutMatch_participantInputObjectSchema as SolveUncheckedUpdateWithoutMatch_participantInputObjectSchema } from './SolveUncheckedUpdateWithoutMatch_participantInput.schema';
import { SolveCreateWithoutMatch_participantInputObjectSchema as SolveCreateWithoutMatch_participantInputObjectSchema } from './SolveCreateWithoutMatch_participantInput.schema';
import { SolveUncheckedCreateWithoutMatch_participantInputObjectSchema as SolveUncheckedCreateWithoutMatch_participantInputObjectSchema } from './SolveUncheckedCreateWithoutMatch_participantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveUpdateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutMatch_participantInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatch_participantInputObjectSchema)])
}).strict();
export const SolveUpsertWithWhereUniqueWithoutMatch_participantInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutMatch_participantInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutMatch_participantInput>;
export const SolveUpsertWithWhereUniqueWithoutMatch_participantInputObjectZodSchema = makeSchema();
