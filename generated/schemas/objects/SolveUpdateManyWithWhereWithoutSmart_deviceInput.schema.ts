import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveScalarWhereInputObjectSchema as SolveScalarWhereInputObjectSchema } from './SolveScalarWhereInput.schema';
import { SolveUpdateManyMutationInputObjectSchema as SolveUpdateManyMutationInputObjectSchema } from './SolveUpdateManyMutationInput.schema';
import { SolveUncheckedUpdateManyWithoutSmart_deviceInputObjectSchema as SolveUncheckedUpdateManyWithoutSmart_deviceInputObjectSchema } from './SolveUncheckedUpdateManyWithoutSmart_deviceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateManyMutationInputObjectSchema), z.lazy(() => SolveUncheckedUpdateManyWithoutSmart_deviceInputObjectSchema)])
}).strict();
export const SolveUpdateManyWithWhereWithoutSmart_deviceInputObjectSchema: z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutSmart_deviceInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateManyWithWhereWithoutSmart_deviceInput>;
export const SolveUpdateManyWithWhereWithoutSmart_deviceInputObjectZodSchema = makeSchema();
