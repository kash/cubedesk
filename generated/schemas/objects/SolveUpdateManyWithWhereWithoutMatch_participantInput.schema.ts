import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './SolveUpdateManyMutationInput.schema';
import { SolveUncheckedUpdateManyWithoutMatch_participantInputObjectSchema as SolveUncheckedUpdateManyWithoutMatch_participantInputObjectSchema } from './SolveUncheckedUpdateManyWithoutMatch_participantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateManyMutationInputObjectSchema), z.lazy(() => SolveUncheckedUpdateManyWithoutMatch_participantInputObjectSchema)])
}).strict();
export const SolveUpdateManyWithWhereWithoutMatch_participantInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutMatch_participantInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutMatch_participantInput>;
export const SolveUpdateManyWithWhereWithoutMatch_participantInputObjectZodSchema = makeSchema();
