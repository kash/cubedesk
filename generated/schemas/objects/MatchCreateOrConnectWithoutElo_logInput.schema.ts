import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutElo_logInputObjectSchema as MatchCreateWithoutElo_logInputObjectSchema } from './MatchCreateWithoutElo_logInput.schema';
import { MatchUncheckedCreateWithoutElo_logInputObjectSchema as MatchUncheckedCreateWithoutElo_logInputObjectSchema } from './MatchUncheckedCreateWithoutElo_logInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchCreateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutElo_logInputObjectSchema)])
}).strict();
export const MatchCreateOrConnectWithoutElo_logInputObjectSchema: z.ZodType<Prisma.MatchCreateOrConnectWithoutElo_logInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateOrConnectWithoutElo_logInput>;
export const MatchCreateOrConnectWithoutElo_logInputObjectZodSchema = makeSchema();
