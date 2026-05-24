import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithoutMatchInputObjectSchema as EloLogUpdateWithoutMatchInputObjectSchema } from './EloLogUpdateWithoutMatchInput.schema';
import { EloLogUncheckedUpdateWithoutMatchInputObjectSchema as EloLogUncheckedUpdateWithoutMatchInputObjectSchema } from './EloLogUncheckedUpdateWithoutMatchInput.schema';
import { EloLogCreateWithoutMatchInputObjectSchema as EloLogCreateWithoutMatchInputObjectSchema } from './EloLogCreateWithoutMatchInput.schema';
import { EloLogUncheckedCreateWithoutMatchInputObjectSchema as EloLogUncheckedCreateWithoutMatchInputObjectSchema } from './EloLogUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EloLogUpdateWithoutMatchInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateWithoutMatchInputObjectSchema)]),
  create: z.union([z.lazy(() => EloLogCreateWithoutMatchInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const EloLogUpsertWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.EloLogUpsertWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpsertWithWhereUniqueWithoutMatchInput>;
export const EloLogUpsertWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
