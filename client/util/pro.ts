import {PublicUserAccount, UserAccount} from '../../server/schemas/UserAccount.schema';

export function isPro(user: UserAccount | PublicUserAccount): boolean {
	if (!user) {
		return false;
	}

	return !!user.is_pro;
}

export function isNotPro(user: UserAccount | PublicUserAccount): boolean {
	return !isPro(user);
}

export function isLoggedInAndPro(user: UserAccount): boolean {
	if (!user) {
		return false;
	}

	return user.is_pro;
}

export function isLoggedInAndNotPro(user: UserAccount): boolean {
	if (!user) {
		return true;
	}

	return !user.is_pro;
}
