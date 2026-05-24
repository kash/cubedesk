import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const BadgeWhereUniqueInputObjectSchema: z.ZodType<Prisma.BadgeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeWhereUniqueInput>;
export const BadgeWhereUniqueInputObjectZodSchema = makeSchema();
