import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionCreateWithoutGame_optionsInputObjectSchema as MatchSessionCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedCreateWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)])
}).strict();
export const MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutGame_optionsInput>;
export const MatchSessionCreateOrConnectWithoutGame_optionsInputObjectZodSchema = makeSchema();
