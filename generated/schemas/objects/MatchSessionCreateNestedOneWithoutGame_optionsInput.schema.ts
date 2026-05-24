import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutGame_optionsInputObjectSchema as MatchSessionCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedCreateWithoutGame_optionsInput.schema';
import { MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema as MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateOrConnectWithoutGame_optionsInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema).optional(),
  connect: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const MatchSessionCreateNestedOneWithoutGame_optionsInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateNestedOneWithoutGame_optionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateNestedOneWithoutGame_optionsInput>;
export const MatchSessionCreateNestedOneWithoutGame_optionsInputObjectZodSchema = makeSchema();
