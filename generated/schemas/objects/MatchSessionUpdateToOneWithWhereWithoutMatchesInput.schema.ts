import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { MatchSessionUpdateWithoutMatchesInputObjectSchema as MatchSessionUpdateWithoutMatchesInputObjectSchema } from './MatchSessionUpdateWithoutMatchesInput.schema';
import { MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema as MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutMatchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MatchSessionUpdateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema)])
}).strict();
export const MatchSessionUpdateToOneWithWhereWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateToOneWithWhereWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateToOneWithWhereWithoutMatchesInput>;
export const MatchSessionUpdateToOneWithWhereWithoutMatchesInputObjectZodSchema = makeSchema();
