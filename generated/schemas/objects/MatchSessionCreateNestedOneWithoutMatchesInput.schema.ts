import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutMatchesInputObjectSchema as MatchSessionCreateWithoutMatchesInputObjectSchema } from './MatchSessionCreateWithoutMatchesInput.schema';
import { MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema as MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema } from './MatchSessionUncheckedCreateWithoutMatchesInput.schema';
import { MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema as MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema } from './MatchSessionCreateOrConnectWithoutMatchesInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutMatchesInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutMatchesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchSessionCreateOrConnectWithoutMatchesInputObjectSchema).optional(),
  connect: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchSessionCreateNestedOneWithoutMatchesInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateNestedOneWithoutMatchesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateNestedOneWithoutMatchesInput>;
export const MatchSessionCreateNestedOneWithoutMatchesInputObjectZodSchema = makeSchema();
