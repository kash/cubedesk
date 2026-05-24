import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutMatch_participantInputObjectSchema as SolveUpdateWithoutMatch_participantInputObjectSchema } from './SolveUpdateWithoutMatch_participantInput.schema';
import { SolveUncheckedUpdateWithoutMatch_participantInputObjectSchema as SolveUncheckedUpdateWithoutMatch_participantInputObjectSchema } from './SolveUncheckedUpdateWithoutMatch_participantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateWithoutMatch_participantInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutMatch_participantInputObjectSchema)])
}).strict();
export const SolveUpdateWithWhereUniqueWithoutMatch_participantInputObjectSchema: z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutMatch_participantInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutMatch_participantInput>;
export const SolveUpdateWithWhereUniqueWithoutMatch_participantInputObjectZodSchema = makeSchema();
