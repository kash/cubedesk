import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithoutMatch_sessionInputObjectSchema as MatchUpdateWithoutMatch_sessionInputObjectSchema } from './MatchUpdateWithoutMatch_sessionInput.schema';
import { MatchUncheckedUpdateWithoutMatch_sessionInputObjectSchema as MatchUncheckedUpdateWithoutMatch_sessionInputObjectSchema } from './MatchUncheckedUpdateWithoutMatch_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MatchUpdateWithoutMatch_sessionInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutMatch_sessionInputObjectSchema)])
}).strict();
export const MatchUpdateWithWhereUniqueWithoutMatch_sessionInputObjectSchema: z.ZodType<Prisma.MatchUpdateWithWhereUniqueWithoutMatch_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateWithWhereUniqueWithoutMatch_sessionInput>;
export const MatchUpdateWithWhereUniqueWithoutMatch_sessionInputObjectZodSchema = makeSchema();
