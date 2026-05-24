import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithoutMatchInputObjectSchema as EloLogUpdateWithoutMatchInputObjectSchema } from './EloLogUpdateWithoutMatchInput.schema';
import { EloLogUncheckedUpdateWithoutMatchInputObjectSchema as EloLogUncheckedUpdateWithoutMatchInputObjectSchema } from './EloLogUncheckedUpdateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EloLogUpdateWithoutMatchInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateWithoutMatchInputObjectSchema)])
}).strict();
export const EloLogUpdateWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.EloLogUpdateWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateWithWhereUniqueWithoutMatchInput>;
export const EloLogUpdateWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
