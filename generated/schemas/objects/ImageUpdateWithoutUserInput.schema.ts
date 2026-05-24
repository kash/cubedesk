import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema as ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema } from './ProfileUpdateOneWithoutHeader_imageNestedInput.schema';
import { ProfileUpdateOneWithoutPfp_imageNestedInputObjectSchema as ProfileUpdateOneWithoutPfp_imageNestedInputObjectSchema } from './ProfileUpdateOneWithoutPfp_imageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storage_path: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile_header_image: z.lazy(() => ProfileUpdateOneWithoutHeader_imageNestedInputObjectSchema).optional(),
  profile_pfp_image: z.lazy(() => ProfileUpdateOneWithoutPfp_imageNestedInputObjectSchema).optional()
}).strict();
export const ImageUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ImageUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUpdateWithoutUserInput>;
export const ImageUpdateWithoutUserInputObjectZodSchema = makeSchema();
