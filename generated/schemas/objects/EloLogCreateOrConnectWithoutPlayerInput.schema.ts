import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogCreateWithoutPlayerInputObjectSchema as EloLogCreateWithoutPlayerInputObjectSchema } from './EloLogCreateWithoutPlayerInput.schema';
import { EloLogUncheckedCreateWithoutPlayerInputObjectSchema as EloLogUncheckedCreateWithoutPlayerInputObjectSchema } from './EloLogUncheckedCreateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EloLogCreateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUncheckedCreateWithoutPlayerInputObjectSchema)])
}).strict();
export const EloLogCreateOrConnectWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogCreateOrConnectWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateOrConnectWithoutPlayerInput>;
export const EloLogCreateOrConnectWithoutPlayerInputObjectZodSchema = makeSchema();
