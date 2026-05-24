import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema';
import { MatchUpdateWithoutWinnerInputObjectSchema as MatchUpdateWithoutWinnerInputObjectSchema } from './MatchUpdateWithoutWinnerInput.schema';
import { MatchUncheckedUpdateWithoutWinnerInputObjectSchema as MatchUncheckedUpdateWithoutWinnerInputObjectSchema } from './MatchUncheckedUpdateWithoutWinnerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MatchUpdateWithoutWinnerInputObjectSchema), z.lazy(() => MatchUncheckedUpdateWithoutWinnerInputObjectSchema)])
}).strict();
export const MatchUpdateWithWhereUniqueWithoutWinnerInputObjectSchema: z.ZodType<Prisma.MatchUpdateWithWhereUniqueWithoutWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchUpdateWithWhereUniqueWithoutWinnerInput>;
export const MatchUpdateWithWhereUniqueWithoutWinnerInputObjectZodSchema = makeSchema();
