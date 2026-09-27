export type TranslationDictionary = Record<string, string>;

declare module 'i18next' {
	interface CustomTypeOptions {
		returnNull: false;
	}
}
