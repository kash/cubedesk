import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionUpdateWithoutMatchesInputObjectSchema as MatchSessionUpdateWithoutMatchesInputObjectSchema } from './MatchSessionUpdateWithoutMatchesInput.schema';
import { MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema as MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutMatchesInput.schema';
import { MatchSessionCreateWithoutMatchesInputObjectSchema as MatchSessionCreateWithoutMatchesInputObjectSchema } from './MatchSessionCreateWithoutMatchesInput.schema';
import { MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema as MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutMatchesInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MatchSessionUpdateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutMatchesInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema)]),
  where: z.lazy(() => MatchSessionWhereInputObjectSchema).optional()
}).strict();
export const MatchSessionUpsertWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionUpsertWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpsertWithoutMatchesInput>;
export const MatchSessionUpsertWithoutMatchesInputObjectZodSchema = makeSchema();
