import bcrypt from 'bcryptjs';

const rounds = 10;

export async function hashPassword(password: string): Promise<string> {
	return new Promise((resolve, reject) => {
		bcrypt.hash(password, rounds, (err, hash) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(hash);
		});
	});
}

export async function checkPassword(password: string, hash: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, hash, (err, bool) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(bool);
		});
	});
}
