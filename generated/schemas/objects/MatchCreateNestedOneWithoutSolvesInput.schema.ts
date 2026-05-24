import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateWithoutSolvesInputObjectSchema as MatchCreateWithoutSolvesInputObjectSchema } from './MatchCreateWithoutSolvesInput.schema';
import { MatchUncheckedCreateWithoutSolvesInputObjectSchema as MatchUncheckedCreateWithoutSolvesInputObjectSchema } from './MatchUncheckedCreateWithoutSolvesInput.schema';
import { MatchCreateOrConnectWithoutSolvesInputObjectSchema as MatchCreateOrConnectWithoutSolvesInputObjectSchema } from './MatchCreateOrConnectWithoutSolvesInput.schema';
import { MatchWhereUniqueInputObjectSchema as MatchWhereUniqueInputObjectSchema } from './MatchWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchCreateWithoutSolvesInputObjectSchema), z.lazy(() => MatchUncheckedCreateWithoutSolvesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchCreateOrConnectWithoutSolvesInputObjectSchema).optional(),
  connect: z.lazy(() => MatchWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchCreateNestedOneWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchCreateNestedOneWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateNestedOneWithoutSolvesInput>;
export const MatchCreateNestedOneWithoutSolvesInputObjectZodSchema = makeSchema();
