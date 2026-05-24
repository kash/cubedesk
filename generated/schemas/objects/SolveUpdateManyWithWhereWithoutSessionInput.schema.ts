import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './SolveUpdateManyMutationInput.schema';
import { SolveUncheckedUpdateManyWithoutSessionInputObjectSchema as SolveUncheckedUpdateManyWithoutSessionInputObjectSchema } from './SolveUncheckedUpdateManyWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateManyMutationInputObjectSchema), z.lazy(() => SolveUncheckedUpdateManyWithoutSessionInputObjectSchema)])
}).strict();
export const SolveUpdateManyWithWhereWithoutSessionInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutSessionInput>;
export const SolveUpdateManyWithWhereWithoutSessionInputObjectZodSchema = makeSchema();
