import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionCreateWithoutMatchesInputObjectSchema as MatchSessionCreateWithoutMatchesInputObjectSchema } from './MatchSessionCreateWithoutMatchesInput.schema';
import { MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema as MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutMatchesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema)])
}).strict();
export const MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutMatchesInput>;
export const MatchSessionCreateOrConnectWithoutMatchesInputObjectZodSchema = makeSchema();
