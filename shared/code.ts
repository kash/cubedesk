import {v4 as uuid} from 'uuid';
import {customAlphabet} from 'nanoid';

const LOWER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_ALPHABET = '0123456789';

const nanoCustom = customAlphabet(`${UPPER_ALPHABET}${LOWER_ALPHABET}${NUMBER_ALPHABET}`, 8)

export function generateRandomCode(length: number): string {
	const result = [];
	const characters = `${UPPER_ALPHABET}${NUMBER_ALPHABET}`;
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
	}
	return result.join('');
}

export function generateRandomString(length: number): string {
	const result = [];
	const characters = `${LOWER_ALPHABET}${NUMBER_ALPHABET}`;
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
	}
	return result.join('');
}

export function generateId(length: number = 8) {
	return nanoCustom(length);
}

export function generateUUID() {
	return uuid();
}
