import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutElo_logInputObjectSchema as MatchCreateWithoutElo_logInputObjectSchema } from './MatchCreateWithoutElo_logInput.schema';
import { MatchUncheckedCreateWithoutElo_logInputObjectSchema as MatchUncheckedCreateWithoutElo_logInputObjectSchema } from './MatchUncheckedCreateWithoutElo_logInput.schema';
import { MatchCreateOrConnectWithoutElo_logInputObjectSchema as MatchCreateOrConnectWithoutElo_logInputObjectSchema } from './MatchCreateOrConnectWithoutElo_logInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutElo_logInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutElo_logInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutElo_logInputObjectSchema).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchCreateNestedOneWithoutElo_logInputObjectSchema: z.ZodType<Prisma.MatchCreateNestedOneWithoutElo_logInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateNestedOneWithoutElo_logInput>;
export const MatchCreateNestedOneWithoutElo_logInputObjectZodSchema = makeSchema();
