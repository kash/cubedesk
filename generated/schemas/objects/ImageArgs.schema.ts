import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageSelectObjectSchema as ImageSelectObjectSchema } from './ImageSelect.schema';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './ImageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ImageSelectObjectSchema).optional(),
  include: z.lazy(() => ImageIncludeObjectSchema).optional()
}).strict();
export const ImageArgsObjectSchema = makeSchema();
export const ImageArgsObjectZodSchema = makeSchema();
