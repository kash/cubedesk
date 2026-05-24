import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateWithoutGame_optionsInputObjectSchema as MatchSessionCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedCreateWithoutGame_optionsInput.schema';
import { MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema as MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema } from './MatchSessionCreateOrConnectWithoutGame_optionsInput.schema';
import { MatchSessionUpsertWithoutGame_optionsInputObjectSchema as MatchSessionUpsertWithoutGame_optionsInputObjectSchema } from './MatchSessionUpsertWithoutGame_optionsInput.schema';
import { MatchSessionWhereInputObjectSchema as MatchSessionWhereInputObjectSchema } from './MatchSessionWhereInput.schema';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema as MatchSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema } from './MatchSessionUpdateToOneWithWhereWithoutGame_optionsInput.schema';
import { MatchSessionUpdateWithoutGame_optionsInputObjectSchema as MatchSessionUpdateWithoutGame_optionsInputObjectSchema } from './MatchSessionUpdateWithoutGame_optionsInput.schema';
import { MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema as MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema } from './MatchSessionUncheckedUpdateWithoutGame_optionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchSessionCreateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutGame_optionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MatchSessionCreateOrConnectWithoutGame_optionsInputObjectSchema).optional(),
  upsert: z.lazy(() => MatchSessionUpsertWithoutGame_optionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MatchSessionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MatchSessionUpdateToOneWithWhereWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUpdateWithoutGame_optionsInputObjectSchema), z.lazy(() => MatchSessionUncheckedUpdateWithoutGame_optionsInputObjectSchema)]).optional()
}).strict();
export const MatchSessionUpdateOneWithoutGame_optionsNestedInputObjectSchema: z.ZodType<Prisma.MatchSessionUpdateOneWithoutGame_optionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionUpdateOneWithoutGame_optionsNestedInput>;
export const MatchSessionUpdateOneWithoutGame_optionsNestedInputObjectZodSchema = makeSchema();
