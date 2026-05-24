import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogScalarWhereInputObjectSchema as MetricLogScalarWhereInputObjectSchema } from './MetricLogScalarWhereInput.schema';
import { MetricLogUpdateManyMutationInputObjectSchema as MetricLogUpdateManyMutationInputObjectSchema } from './MetricLogUpdateManyMutationInput.schema';
import { MetricLogUncheckedUpdateManyWithoutUserInputObjectSchema as MetricLogUncheckedUpdateManyWithoutUserInputObjectSchema } from './MetricLogUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetricLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MetricLogUpdateManyMutationInputObjectSchema), z.lazy(() => MetricLogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const MetricLogUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.MetricLogUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUpdateManyWithWhereWithoutUserInput>;
export const MetricLogUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
