import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithoutPlayerInputObjectSchema as EloLogUpdateWithoutPlayerInputObjectSchema } from './EloLogUpdateWithoutPlayerInput.schema';
import { EloLogUncheckedUpdateWithoutPlayerInputObjectSchema as EloLogUncheckedUpdateWithoutPlayerInputObjectSchema } from './EloLogUncheckedUpdateWithoutPlayerInput.schema';
import { EloLogCreateWithoutPlayerInputObjectSchema as EloLogCreateWithoutPlayerInputObjectSchema } from './EloLogCreateWithoutPlayerInput.schema';
import { EloLogUncheckedCreateWithoutPlayerInputObjectSchema as EloLogUncheckedCreateWithoutPlayerInputObjectSchema } from './EloLogUncheckedCreateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EloLogUpdateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateWithoutPlayerInputObjectSchema)]),
  create: z.union([z.lazy(() => EloLogCreateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutPlayerInputObjectSchema)])
}).strict();
export const EloLogUpsertWithWhereUniqueWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogUpsertWithWhereUniqueWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpsertWithWhereUniqueWithoutPlayerInput>;
export const EloLogUpsertWithWhereUniqueWithoutPlayerInputObjectZodSchema = makeSchema();
