export enum ErrorMessage {
	INVALID_LOGIN = 'Invalid login',
	FORBIDDEN = 'You do not have access to this resource',
	RESOURCE_NOT_FOUND = 'Could not find resource',
	BAD_INPUT = 'Invalid input',
	BANNED = 'You are banned',
	NO_ID_IN_INPUT = 'ID cannot be provided in create or update inputs',
}

export enum ErrorCode {
	SERVER = 'UNAUTHENTICATED',
	UNAUTHENTICATED = 'UNAUTHENTICATED',
	FORBIDDEN = 'FORBIDDEN',
	NOT_FOUND = 'NOT_FOUND',
	BAD_INPUT = 'BAD_INPUT',
	INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}
