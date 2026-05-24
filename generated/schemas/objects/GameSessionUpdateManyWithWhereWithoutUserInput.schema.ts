import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionScalarWhereInputObjectSchema as GameSessionScalarWhereInputObjectSchema } from './GameSessionScalarWhereInput.schema';
import { GameSessionUpdateManyMutationInputObjectSchema as GameSessionUpdateManyMutationInputObjectSchema } from './GameSessionUpdateManyMutationInput.schema';
import { GameSessionUncheckedUpdateManyWithoutUserInputObjectSchema as GameSessionUncheckedUpdateManyWithoutUserInputObjectSchema } from './GameSessionUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GameSessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GameSessionUpdateManyMutationInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const GameSessionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateManyWithWhereWithoutUserInput>;
export const GameSessionUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
