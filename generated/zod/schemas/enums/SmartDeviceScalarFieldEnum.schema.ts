import * as z from 'zod';

export const SmartDeviceScalarFieldEnumSchema = z.enum(['id', 'name', 'internal_name', 'created_at', 'device_id', 'user_id'])

export type SmartDeviceScalarFieldEnum = z.infer<typeof SmartDeviceScalarFieldEnumSchema>;