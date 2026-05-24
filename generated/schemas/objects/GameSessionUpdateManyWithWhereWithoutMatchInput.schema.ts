import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionScalarWhereInputObjectSchema as GameSessionScalarWhereInputObjectSchema } from './GameSessionScalarWhereInput.schema';
import { GameSessionUpdateManyMutationInputObjectSchema as GameSessionUpdateManyMutationInputObjectSchema } from './GameSessionUpdateManyMutationInput.schema';
import { GameSessionUncheckedUpdateManyWithoutMatchInputObjectSchema as GameSessionUncheckedUpdateManyWithoutMatchInputObjectSchema } from './GameSessionUncheckedUpdateManyWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GameSessionUpdateManyMutationInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateManyWithoutMatchInputObjectSchema)])
}).strict();
export const GameSessionUpdateManyWithWhereWithoutMatchInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateManyWithWhereWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateManyWithWhereWithoutMatchInput>;
export const GameSessionUpdateManyWithWhereWithoutMatchInputObjectZodSchema = makeSchema();
