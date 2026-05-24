import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionScalarWhereInputObjectSchema as MatchSessionScalarWhereInputObjectSchema } from './MatchSessionScalarWhereInput.schema';
import { MatchSessionUpdateManyMutationInputObjectSchema as MatchSessionUpdateManyMutationInputObjectSchema } from './MatchSessionUpdateManyMutationInput.schema';
import { MatchSessionUncheckedUpdateManyWithoutCreated_byInputObjectSchema as MatchSessionUncheckedUpdateManyWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedUpdateManyWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MatchSessionUpdateManyMutationInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateManyWithoutCreated_byInputObjectSchema)])
}).strict();
export const MatchSessionUpdateManyWithWhereWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateManyWithWhereWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateManyWithWhereWithoutCreated_byInput>;
export const MatchSessionUpdateManyWithWhereWithoutCreated_byInputObjectZodSchema = makeSchema();
