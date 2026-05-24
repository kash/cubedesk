import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutGame_sessionInputObjectSchema as MatchCreateWithoutGame_sessionInputObjectSchema } from './MatchCreateWithoutGame_sessionInput.schema';
import { MatchUncheckedCreateWithoutGame_sessionInputObjectSchema as MatchUncheckedCreateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const MatchCreateOrConnectWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.MatchCreateOrConnectWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateOrConnectWithoutGame_sessionInput>;
export const MatchCreateOrConnectWithoutGame_sessionInputObjectZodSchema = makeSchema();
