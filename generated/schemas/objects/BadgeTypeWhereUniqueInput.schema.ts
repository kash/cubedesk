import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const BadgeTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.BadgeTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeWhereUniqueInput>;
export const BadgeTypeWhereUniqueInputObjectZodSchema = makeSchema();
