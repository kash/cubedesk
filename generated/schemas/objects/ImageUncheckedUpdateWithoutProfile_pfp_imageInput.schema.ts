import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUncheckedUpdateOneWithoutHeader_imageNestedInputObjectSchema as ProfileUncheckedUpdateOneWithoutHeader_imageNestedInputObjectSchema } from './ProfileUncheckedUpdateOneWithoutHeader_imageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storage_path: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile_header_image: z.lazy(() => ProfileUncheckedUpdateOneWithoutHeader_imageNestedInputObjectSchema).optional()
}).strict();
export const ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageUncheckedUpdateWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedUpdateWithoutProfile_pfp_imageInput>;
export const ImageUncheckedUpdateWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
