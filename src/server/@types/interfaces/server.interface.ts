import {PrismaClient} from '@prisma/client';
import {UserAccount} from '@/generated/zod';
import {NotificationType} from '../enums';

export interface NotificationData {
	subject: string;
	inAppMessage: string;
	message: string;
	icon: string;
	link: string;
	linkText: string;
	categoryName: string;
	data: object;
}

export interface NotificationInput {
	triggeringUser: UserAccount;
	user: UserAccount;
	sendEmail: boolean;
}

// GraphQLContext removed - using tRPC instead
