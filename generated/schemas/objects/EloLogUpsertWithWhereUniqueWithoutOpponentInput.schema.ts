import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithoutOpponentInputObjectSchema as EloLogUpdateWithoutOpponentInputObjectSchema } from './EloLogUpdateWithoutOpponentInput.schema';
import { EloLogUncheckedUpdateWithoutOpponentInputObjectSchema as EloLogUncheckedUpdateWithoutOpponentInputObjectSchema } from './EloLogUncheckedUpdateWithoutOpponentInput.schema';
import { EloLogCreateWithoutOpponentInputObjectSchema as EloLogCreateWithoutOpponentInputObjectSchema } from './EloLogCreateWithoutOpponentInput.schema';
import { EloLogUncheckedCreateWithoutOpponentInputObjectSchema as EloLogUncheckedCreateWithoutOpponentInputObjectSchema } from './EloLogUncheckedCreateWithoutOpponentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EloLogUpdateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateWithoutOpponentInputObjectSchema)]),
  create: z.union([z.lazy(() => EloLogCreateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutOpponentInputObjectSchema)])
}).strict();
export const EloLogUpsertWithWhereUniqueWithoutOpponentInputObjectSchema: z.ZodType<Prisma.EloLogUpsertWithWhereUniqueWithoutOpponentInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpsertWithWhereUniqueWithoutOpponentInput>;
export const EloLogUpsertWithWhereUniqueWithoutOpponentInputObjectZodSchema = makeSchema();
