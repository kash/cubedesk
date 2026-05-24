import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereUniqueInputObjectSchema as EloLogWhereUniqueInputObjectSchema } from './EloLogWhereUniqueInput.schema';
import { EloLogUpdateWithoutPlayerInputObjectSchema as EloLogUpdateWithoutPlayerInputObjectSchema } from './EloLogUpdateWithoutPlayerInput.schema';
import { EloLogUncheckedUpdateWithoutPlayerInputObjectSchema as EloLogUncheckedUpdateWithoutPlayerInputObjectSchema } from './EloLogUncheckedUpdateWithoutPlayerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EloLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EloLogUpdateWithoutPlayerInputObjectSchema), z.lazy(() => EloLogUncheckedUpdateWithoutPlayerInputObjectSchema)])
}).strict();
export const EloLogUpdateWithWhereUniqueWithoutPlayerInputObjectSchema: z.ZodType<Prisma.EloLogUpdateWithWhereUniqueWithoutPlayerInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogUpdateWithWhereUniqueWithoutPlayerInput>;
export const EloLogUpdateWithWhereUniqueWithoutPlayerInputObjectZodSchema = makeSchema();
