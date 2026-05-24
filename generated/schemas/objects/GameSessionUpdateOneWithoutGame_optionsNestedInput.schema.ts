import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateWithoutGame_optionsInputObjectSchema as GameSessionCreateWithoutGame_optionsInputObjectSchema } from './GameSessionCreateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedCreateWithoutGame_optionsInput.schema';
import { GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema as GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema } from './GameSessionCreateOrConnectWithoutGame_optionsInput.schema';
import { GameSessionUpsertWithoutGame_optionsInputObjectSchema as GameSessionUpsertWithoutGame_optionsInputObjectSchema } from './GameSessionUpsertWithoutGame_optionsInput.schema';
import { GameSessionWhereInputObjectSchema as GameSessionWhereInputObjectSchema } from './GameSessionWhereInput.schema';
import { GameSessionWhereUniqueInputObjectSchema as GameSessionWhereUniqueInputObjectSchema } from './GameSessionWhereUniqueInput.schema';
import { GameSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema as GameSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema } from './GameSessionUpdateToOneWithWhereWithoutGame_optionsInput.schema';
import { GameSessionUpdateWithoutGame_optionsInputObjectSchema as GameSessionUpdateWithoutGame_optionsInputObjectSchema } from './GameSessionUpdateWithoutGame_optionsInput.schema';
import { GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema as GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema } from './GameSessionUncheckedUpdateWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GameSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GameSessionCreateOrConnectWithoutGame_optionsInputObjectSchema).optional(),
  upsert: z.lazy(() => GameSessionUpsertWithoutGame_optionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => GameSessionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => GameSessionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => GameSessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GameSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUpdateWithoutGame_optionsInputObjectSchema), z.lazy(() => GameSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema)]).optional()
}).strict();
export const GameSessionUpdateOneWithoutGame_optionsNestedInputObjectSchema: z.ZodType<Prisma.GameSessionUpdateOneWithoutGame_optionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionUpdateOneWithoutGame_optionsNestedInput>;
export const GameSessionUpdateOneWithoutGame_optionsNestedInputObjectZodSchema = makeSchema();
