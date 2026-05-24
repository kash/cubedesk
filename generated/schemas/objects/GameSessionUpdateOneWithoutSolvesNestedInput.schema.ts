import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutSolvesInputObjectSchema as GameSessionCreateWithoutSolvesInputObjectSchema } from './GameSessionCreateWithoutSolvesInput.schema';
import { GameSessionUncheckedCreateWithoutSolvesInputObjectSchema as GameSessionUncheckedCreateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedCreateWithoutSolvesInput.schema';
import { GameSessionCreateOrConnectWithoutSolvesInputObjectSchema as GameSessionCreateOrConnectWithoutSolvesInputObjectSchema } from './GameSessionCreateOrConnectWithoutSolvesInput.schema';
import { GameSessionUpsertWithoutSolvesInputObjectSchema as GameSessionUpsertWithoutSolvesInputObjectSchema } from './GameSessionUpsertWithoutSolvesInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema as GameSessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema } from './GameSessionUpdateToOneWithWhereWithoutSolvesInput.schema';
import { GameSessionUpdateWithoutSolvesInputObjectSchema as GameSessionUpdateWithoutSolvesInputObjectSchema } from './GameSessionUpdateWithoutSolvesInput.schema';
import { GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema as GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema } from './GameSessionUncheckedUpdateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameSessionCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  upsert: z.lazy(() => GameSessionUpsertWithoutSolvesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameSessionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameSessionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameSessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameSessionUpdateToOneWithWhereWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUpdateWithoutSolvesInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutSolvesInputObjectSchema)]).optional()
}).strict();
export const GameSessionUpdateOneWithoutSolvesNestedInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateOneWithoutSolvesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateOneWithoutSolvesNestedInput>;
export const GameSessionUpdateOneWithoutSolvesNestedInputObjectZodSchema = makeSchema();
