import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogCreateWithoutCreated_byInputObjectSchema as BanLogCreateWithoutCreated_byInputObjectSchema } from './BanLogCreateWithoutCreated_byInput.schema';
import { BanLogUncheckedCreateWithoutCreated_byInputObjectSchema as BanLogUncheckedCreateWithoutCreated_byInputObjectSchema } from './BanLogUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanLogCreateWithoutCreated_byInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const BanLogCreateOrConnectWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BanLogCreateOrConnectWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateOrConnectWithoutCreated_byInput>;
export const BanLogCreateOrConnectWithoutCreated_byInputObjectZodSchema = makeSchema();
