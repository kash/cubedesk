interface PasswordStrength {
	isStrong: boolean;
	number1Check: boolean;
	char8Check: boolean;
	cap1Check: boolean;
	lower1Check: boolean;
	confirmMatches: boolean;
	errorMessage: string;
}

export function validateStrongPassword(pass: string, confirmPassword?: string): PasswordStrength {
	const number1Check = /\d+/g.test(pass);
	const char8Check = pass.length >= 8;
	const cap1Check = /[A-Z]+/.test(pass);
	const lower1Check = /[a-z]+/.test(pass);
	const confirmMatches = typeof confirmPassword === 'undefined' || (pass === confirmPassword && !!pass);
	const errMsg = [];

	if (!confirmMatches) {
		errMsg.push('Passwords do not match');
	}

	if (!lower1Check) {
		errMsg.push('Must contain at least one capital letter');
	}

	if (!cap1Check) {
		errMsg.push('Must contain at least one capital letter');
	}

	if (!number1Check) {
		errMsg.push('Must contain at least one number');
	}

	if (!char8Check) {
		errMsg.push('Must contain at least 8 characters');
	}

	return {
		isStrong: number1Check && char8Check && cap1Check && lower1Check && confirmMatches,
		number1Check,
		char8Check,
		confirmMatches,
		cap1Check,
		lower1Check,
		errorMessage: errMsg.join('. '),
	};
}
