import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutSolvesInputObjectSchema as MatchCreateWithoutSolvesInputObjectSchema } from './MatchCreateWithoutSolvesInput.schema';
import { MatchUncheckedCreateWithoutSolvesInputObjectSchema as MatchUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchUncheckedCreateWithoutSolvesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutSolvesInputObjectSchema)])
}).strict();
export const MatchCreateOrConnectWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchCreateOrConnectWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateOrConnectWithoutSolvesInput>;
export const MatchCreateOrConnectWithoutSolvesInputObjectZodSchema = makeSchema();
