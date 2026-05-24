import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionUpdateWithoutGame_optionsInputObjectSchema as MatchSessionUpdateWithoutGame_optionsInputObjectSchema } from './MatchSessionUpdateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutGame_optionsInput.schema';
import { MatchSessionCreateWithoutGame_optionsInputObjectSchema as MatchSessionCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedCreateWithoutGame_optionsInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchSessionUpdateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)]),
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionUpsertWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.MatchSessionUpsertWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpsertWithoutGame_optionsInput>;
export const MatchSessionUpsertWithoutGame_optionsInputObjectZodSchema = makeSchema();
