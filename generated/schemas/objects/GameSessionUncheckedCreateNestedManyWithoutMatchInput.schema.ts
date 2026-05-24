import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutMatchInputObjectSchema as GameSessionCreateWithoutMatchInputObjectSchema } from './GameSessionCreateWithoutMatchInput.schema';
import { GameSessionUncheckedCreateWithoutMatchInputObjectSchema as GameSessionUncheckedCreateWithoutMatchInputObjectSchema } from './GameSessionUncheckedCreateWithoutMatchInput.schema';
import { GameSessionCreateOrConnectWithoutMatchInputObjectSchema as GameSessionCreateOrConnectWithoutMatchInputObjectSchema } from './GameSessionCreateOrConnectWithoutMatchInput.schema';
import { GameSessionCreateManyMatchInputEnvelopeObjectSchema as GameSessionCreateManyMatchInputEnvelopeObjectSchema } from './GameSessionCreateManyMatchInputEnvelope.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionCreateWithoutMatchInputObjectSchema).array(), z.lazy(() => GameSessionUncheckedCreateWithoutMatchInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutMatchInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GameSessionCreateOrConnectWithoutMatchInputObjectSchema), z.lazy(() => GameSessionCreateOrConnectWithoutMatchInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GameSessionCreateManyMatchInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GameSessionWhereUniqueInputObjectSchema), z.lazy(() => GameSessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GameSessionUncheckedCreateNestedManyWithoutMatchInputObjectSchema: z.ZodType<Prisma.GameSessionUncheckedCreateNestedManyWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUncheckedCreateNestedManyWithoutMatchInput>;
export const GameSessionUncheckedCreateNestedManyWithoutMatchInputObjectZodSchema = makeSchema();
