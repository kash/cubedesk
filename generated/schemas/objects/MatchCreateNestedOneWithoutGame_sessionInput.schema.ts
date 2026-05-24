import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutGame_sessionInputObjectSchema as MatchCreateWithoutGame_sessionInputObjectSchema } from './MatchCreateWithoutGame_sessionInput.schema';
import { MatchUncheckedCreateWithoutGame_sessionInputObjectSchema as MatchUncheckedCreateWithoutGame_sessionInputObjectSchema } from './MatchUncheckedCreateWithoutGame_sessionInput.schema';
import { MatchCreateOrConnectWithoutGame_sessionInputObjectSchema as MatchCreateOrConnectWithoutGame_sessionInputObjectSchema } from './MatchCreateOrConnectWithoutGame_sessionInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutGame_sessionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutGame_sessionInputObjectSchema).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchCreateNestedOneWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.MatchCreateNestedOneWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateNestedOneWithoutGame_sessionInput>;
export const MatchCreateNestedOneWithoutGame_sessionInputObjectZodSchema = makeSchema();
