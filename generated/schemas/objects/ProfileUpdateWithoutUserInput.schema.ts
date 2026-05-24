import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EloRatingUpdateOneWithoutProfileNestedInputObjectSchema as EloRatingUpdateOneWithoutProfileNestedInputObjectSchema } from './EloRatingUpdateOneWithoutProfileNestedInput.schema';
import { ImageUpdateOneWithoutProfile_header_imageNestedInputObjectSchema as ImageUpdateOneWithoutProfile_header_imageNestedInputObjectSchema } from './ImageUpdateOneWithoutProfile_header_imageNestedInput.schema';
import { ImageUpdateOneWithoutProfile_pfp_imageNestedInputObjectSchema as ImageUpdateOneWithoutProfile_pfp_imageNestedInputObjectSchema } from './ImageUpdateOneWithoutProfile_pfp_imageNestedInput.schema';
import { ProfileViewUpdateManyWithoutProfileNestedInputObjectSchema as ProfileViewUpdateManyWithoutProfileNestedInputObjectSchema } from './ProfileViewUpdateManyWithoutProfileNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
  elo_rating: z.lazy(() => EloRatingUpdateOneWithoutProfileNestedInputObjectSchema).optional(),
  header_image: z.lazy(() => ImageUpdateOneWithoutProfile_header_imageNestedInputObjectSchema).optional(),
  pfp_image: z.lazy(() => ImageUpdateOneWithoutProfile_pfp_imageNestedInputObjectSchema).optional(),
  views: z.lazy(() => ProfileViewUpdateManyWithoutProfileNestedInputObjectSchema).optional()
}).strict();
export const ProfileUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateWithoutUserInput>;
export const ProfileUpdateWithoutUserInputObjectZodSchema = makeSchema();
