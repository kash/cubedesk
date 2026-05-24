import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithoutMatch_sessionInputObjectSchema as MatchUpdateWithoutMatch_sessionInputObjectSchema } from './MatchUpdateWithoutMatch_sessionInput.schema';
import { MatchUncheckedUpdateWithoutMatch_sessionInputObjectSchema as MatchUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedUpdateWithoutMatch_sessionInput.schema';
import { MatchCreateWithoutMatch_sessionInputObjectSchema as MatchCreateWithoutMatch_sessionInputObjectSchema } from './MatchCreateWithoutMatch_sessionInput.schema';
import { MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema as MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MatchUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutMatch_sessionInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchCreateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const MatchUpsertWithWhereUniqueWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchUpsertWithWhereUniqueWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpsertWithWhereUniqueWithoutMatch_sessionInput>;
export const MatchUpsertWithWhereUniqueWithoutMatch_sessionInputObjectZodSchema = makeSchema();
