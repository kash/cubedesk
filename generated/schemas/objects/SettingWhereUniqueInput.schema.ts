import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string().optional()
}).strict();
export const SettingWhereUniqueInputObjectSchema: z.ZodType<Prisma.SettingWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingWhereUniqueInput>;
export const SettingWhereUniqueInputObjectZodSchema = makeSchema();
