import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutSolvesInputObjectSchema as GameSessionCreateWithoutSolvesInputObjectSchema } from './GameSessionCreateWithoutSolvesInput.schema';
import { GameSessionUncheckedCreateWithoutSolvesInputObjectSchema as GameSessionUncheckedCreateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedCreateWithoutSolvesInput.schema';
import { GameSessionCreateOrConnectWithoutSolvesInputObjectSchema as GameSessionCreateOrConnectWithoutSolvesInputObjectSchema } from './GameSessionCreateOrConnectWithoutSolvesInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameSessionCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => GameSessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const GameSessionCreateNestedOneWithoutSolvesInputObjectSchema: z.ZodType<Prisma.GameSessionCreateNestedOneWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateNestedOneWithoutSolvesInput>;
export const GameSessionCreateNestedOneWithoutSolvesInputObjectZodSchema = makeSchema();
