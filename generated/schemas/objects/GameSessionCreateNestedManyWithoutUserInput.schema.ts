import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutUserInputObjectSchema as GameSessionCreateWithoutUserInputObjectSchema } from './GameSessionCreateWithoutUserInput.schema';
import { GameSessionUncheckedCreateWithoutUserInputObjectSchema as GameSessionUncheckedCreateWithoutUserInputObjectSchema } from './GameSessionUncheckedCreateWithoutUserInput.schema';
import { GameSessionCreateOrConnectWithoutUserInputObjectSchema as GameSessionCreateOrConnectWithoutUserInputObjectSchema } from './GameSessionCreateOrConnectWithoutUserInput.schema';
import { GameSessionCreateManyUserInputEnvelopeObjectSchema as GameSessionCreateManyUserInputEnvelopeObjectSchema } from './GameSessionCreateManyUserInputEnvelope.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutUserInputObjectSchema), z.lazy(() => GameSessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => GameSessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GameSessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => GameSessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GameSessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GameSessionCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.GameSessionCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateNestedManyWithoutUserInput>;
export const GameSessionCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
