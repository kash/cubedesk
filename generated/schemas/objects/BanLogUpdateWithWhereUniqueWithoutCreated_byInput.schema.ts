import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogUpdateWithoutCreated_byInputObjectSchema as BanLogUpdateWithoutCreated_byInputObjectSchema } from './BanLogUpdateWithoutCreated_byInput.schema';
import { BanLogUncheckedUpdateWithoutCreated_byInputObjectSchema as BanLogUncheckedUpdateWithoutCreated_byInputObjectSchema } from './BanLogUncheckedUpdateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BanLogUpdateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUncheckedUpdateWithoutCreated_byInputObjectSchema)])
}).strict();
export const BanLogUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogUpdateWithWhereUniqueWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpdateWithWhereUniqueWithoutCreated_byInput>;
export const BanLogUpdateWithWhereUniqueWithoutCreated_byInputObjectZodSchema = makeSchema();
