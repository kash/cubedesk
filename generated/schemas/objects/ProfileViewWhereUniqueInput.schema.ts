import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ProfileViewWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProfileViewWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewWhereUniqueInput>;
export const ProfileViewWhereUniqueInputObjectZodSchema = makeSchema();
