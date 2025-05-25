import * as jose from 'jose';

type JwtAdminPayload = {
	type: 'admin';
};

type JwtEmployeePayload = {
	type: 'employee';
	org_id: string;
};

type JwtPayload = {
	user_id: string;
	created_at: number;
} & (JwtAdminPayload | JwtEmployeePayload);

export async function getJwtString(payload: JwtPayload) {
	const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
	return await new jose.SignJWT(payload).setProtectedHeader({alg: 'HS256'}).sign(secret);
}

export async function getJwtPayload(cookie: string | undefined) {
	if (!cookie) {
		return undefined;
	}

	try {
		const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
		const {payload} = await jose.jwtVerify(cookie, secret);
		const output = payload as unknown as JwtPayload;

		if (!output) {
			return undefined;
		}

		return output;
	} catch {
		return undefined;
	}
}

export async function getAuthedProps<T>(
	cookie: string | undefined,
	fetch: (userId: string) => Promise<T | null>,
): Promise<T | undefined> {
	if (!cookie) {
		return undefined;
	}

	try {
		const payload = await getJwtPayload(cookie);
		if (!payload) {
			return undefined;
		}

		const user = await fetch(payload.user_id);

		if (user) {
			return user;
		}
	} catch (e) {
		console.error(e);
	}

	return undefined;
}
