import bcrypt from 'bcryptjs';

const rounds = 10;

export function hashPassword(password: string): string {
	return bcrypt.hashSync(password, rounds);
}

export async function checkPassword(password: string, hash: string): Promise<boolean> {
	return bcrypt.compareSync(password, hash);
}
