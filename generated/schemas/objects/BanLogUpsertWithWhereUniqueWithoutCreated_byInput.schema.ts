import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogUpdateWithoutCreated_byInputObjectSchema as BanLogUpdateWithoutCreated_byInputObjectSchema } from './BanLogUpdateWithoutCreated_byInput.schema';
import { BanLogUncheckedUpdateWithoutCreated_byInputObjectSchema as BanLogUncheckedUpdateWithoutCreated_byInputObjectSchema } from './BanLogUncheckedUpdateWithoutCreated_byInput.schema';
import { BanLogCreateWithoutCreated_byInputObjectSchema as BanLogCreateWithoutCreated_byInputObjectSchema } from './BanLogCreateWithoutCreated_byInput.schema';
import { BanLogUncheckedCreateWithoutCreated_byInputObjectSchema as BanLogUncheckedCreateWithoutCreated_byInputObjectSchema } from './BanLogUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BanLogUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUncheckedUpdateWithoutCreated_byInputObjectSchema)]),
  create: z.union([z.lazy(() => BanLogCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const BanLogUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogUpsertWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpsertWithWhereUniqueWithoutCreated_byInput>;
export const BanLogUpsertWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
