import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogCreateWithoutOpponentInputObjectSchema as EloLogCreateWithoutOpponentInputObjectSchema } from './EloLogCreateWithoutOpponentInput.schema';
import { EloLogUncheckedCreateWithoutOpponentInputObjectSchema as EloLogUncheckedCreateWithoutOpponentInputObjectSchema } from './EloLogUncheckedCreateWithoutOpponentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EloLogCreateWithoutOpponentInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutOpponentInputObjectSchema)])
}).strict();
export const EloLogCreateOrConnectWithoutOpponentInputObjectSchema: z.ZodType<Prisma.EloLogCreateOrConnectWithoutOpponentInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateOrConnectWithoutOpponentInput>;
export const EloLogCreateOrConnectWithoutOpponentInputObjectZodSchema = makeSchema();
