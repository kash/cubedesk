import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithoutOpponentInputObjectSchema as EloLogUpdateWithoutOpponentInputObjectSchema } from './EloLogUpdateWithoutOpponentInput.schema';
import { EloLogUncheckedUpdateWithoutOpponentInputObjectSchema as EloLogUncheckedUpdateWithoutOpponentInputObjectSchema } from './EloLogUncheckedUpdateWithoutOpponentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EloLogUpdateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateWithoutOpponentInputObjectSchema)])
}).strict();
export const EloLogUpdateWithWhereUniqueWithoutOpponentInputObjectSchema: z.ZodType<Prisma.EloLogUpdateWithWhereUniqueWithoutOpponentInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateWithWhereUniqueWithoutOpponentInput>;
export const EloLogUpdateWithWhereUniqueWithoutOpponentInputObjectZodSchema = makeSchema();
