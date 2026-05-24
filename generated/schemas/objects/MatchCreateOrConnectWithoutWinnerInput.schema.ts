import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutWinnerInputObjectSchema as MatchCreateWithoutWinnerInputObjectSchema } from './MatchCreateWithoutWinnerInput.schema';
import { MatchUncheckedCreateWithoutWinnerInputObjectSchema as MatchUncheckedCreateWithoutWinnerInputObjectSchema } from './MatchUncheckedCreateWithoutWinnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchCreateWithoutWinnerInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutWinnerInputObjectSchema)])
}).strict();
export const MatchCreateOrConnectWithoutWinnerInputObjectSchema: z.ZodType<Prisma.MatchCreateOrConnectWithoutWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateOrConnectWithoutWinnerInput>;
export const MatchCreateOrConnectWithoutWinnerInputObjectZodSchema = makeSchema();
