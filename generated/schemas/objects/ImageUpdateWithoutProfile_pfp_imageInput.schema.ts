import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutImageNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutImageNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutImageNestedInput.schema';
import { ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema as ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema } from './ProfileUpdateOneWithoutHeader_imageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storage_path: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutImageNestedInputObjectSchema).optional(),
  profile_header_image: z.lazy(() => ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema).optional()
}).strict();
export const ImageUpdateWithoutProfile_pfp_imageInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithoutProfile_pfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithoutProfile_pfp_imageInput>;
export const ImageUpdateWithoutProfile_pfp_imageInputObjectZodSchema = makeSchema();
