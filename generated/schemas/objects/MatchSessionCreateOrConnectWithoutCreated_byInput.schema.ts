import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionWhereUniqueInputObjectSchema as MatchSessionWhereUniqueInputObjectSchema } from './MatchSessionWhereUniqueInput.schema';
import { MatchSessionCreateWithoutCreated_byInputObjectSchema as MatchSessionCreateWithoutCreated_byInputObjectSchema } from './MatchSessionCreateWithoutCreated_byInput.schema';
import { MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema as MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema } from './MatchSessionUncheckedCreateWithoutCreated_byInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchSessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchSessionCreateWithoutCreated_byInputObjectSchema), z.lazy(() => MatchSessionUncheckedCreateWithoutCreated_byInputObjectSchema)])
}).strict();
export const MatchSessionCreateOrConnectWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateOrConnectWithoutCreated_byInput>;
export const MatchSessionCreateOrConnectWithoutCreated_byInputObjectZodSchema = makeSchema();
