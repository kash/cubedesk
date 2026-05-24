import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './SolveUpdateManyMutationInput.schema';
import { SolveUncheckedUpdateManyWithoutGame_sessionInputObjectSchema as SolveUncheckedUpdateManyWithoutGame_sessionInputObjectSchema } from './SolveUncheckedUpdateManyWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateManyMutationInputObjectSchema), z.lazy(() => SolveUncheckedUpdateManyWithoutGame_sessionInputObjectSchema)])
}).strict();
export const SolveUpdateManyWithWhereWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutGame_sessionInput>;
export const SolveUpdateManyWithWhereWithoutGame_sessionInputObjectZodSchema = makeSchema();
