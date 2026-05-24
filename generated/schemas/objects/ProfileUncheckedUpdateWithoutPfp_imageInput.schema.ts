import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EloRatingUncheckedUpdateOneWithoutProfileNestedInputObjectSchema as EloRatingUncheckedUpdateOneWithoutProfileNestedInputObjectSchema } from './EloRatingUncheckedUpdateOneWithoutProfileNestedInput.schema';
import { ProfileViewUncheckedUpdateManyWithoutProfileNestedInputObjectSchema as ProfileViewUncheckedUpdateManyWithoutProfileNestedInputObjectSchema } from './ProfileViewUncheckedUpdateManyWithoutProfileNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  header_image_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  favorite_event: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  main_three_cube: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  three_goal: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  three_method: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  reddit_link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  twitch_link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  youtube_link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  twitter_link: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  discord_id: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  show_discord_message_button: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  elo_rating: z.lazy(() => EloRatingUncheckedUpdateOneWithoutProfileNestedInputObjectSchema).optional(),
  views: z.lazy(() => ProfileViewUncheckedUpdateManyWithoutProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedUpdateWithoutPfp_imageInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutPfp_imageInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedUpdateWithoutPfp_imageInput>;
export const ProfileUncheckedUpdateWithoutPfp_imageInputObjectZodSchema = makeSchema();
