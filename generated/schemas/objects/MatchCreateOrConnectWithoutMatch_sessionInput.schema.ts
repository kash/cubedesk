import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchCreateWithoutMatch_sessionInputObjectSchema as MatchCreateWithoutMatch_sessionInputObjectSchema } from './MatchCreateWithoutMatch_sessionInput.schema';
import { MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema as MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const MatchCreateOrConnectWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchCreateOrConnectWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateOrConnectWithoutMatch_sessionInput>;
export const MatchCreateOrConnectWithoutMatch_sessionInputObjectZodSchema = makeSchema();
