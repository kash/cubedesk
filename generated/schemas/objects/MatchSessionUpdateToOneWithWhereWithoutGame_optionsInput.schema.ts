import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { MatchSessionUpdateWithoutGame_optionsInputObjectSchema as MatchSessionUpdateWithoutGame_optionsInputObjectSchema } from './MatchSessionUpdateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchSessionUpdateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema)])
}).strict();
export const MatchSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateToOneWithWhereWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateToOneWithWhereWithoutGame_optionsInput>;
export const MatchSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectZodSchema = makeSchema();
