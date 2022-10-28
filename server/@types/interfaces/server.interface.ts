import {PrismaClient} from '@prisma/client';
import express from 'express';
import {InternalUserAccount, UserAccount} from '../../schemas/UserAccount.schema';
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

export interface GraphQLContext {
	ipAddress: string;
	user: InternalUserAccount;
	req: express.Request;
	res: express.Response;
	prisma: PrismaClient;
}
