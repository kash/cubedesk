import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogCreateWithoutMatchInputObjectSchema as EloLogCreateWithoutMatchInputObjectSchema } from './EloLogCreateWithoutMatchInput.schema';
import { EloLogUncheckedCreateWithoutMatchInputObjectSchema as EloLogUncheckedCreateWithoutMatchInputObjectSchema } from './EloLogUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EloLogCreateWithoutMatchInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const EloLogCreateOrConnectWithoutMatchInputObjectSchema: z.ZodType<Prisma.EloLogCreateOrConnectWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateOrConnectWithoutMatchInput>;
export const EloLogCreateOrConnectWithoutMatchInputObjectZodSchema = makeSchema();
