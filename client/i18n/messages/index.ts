import type {TranslationDictionary} from '../types';
import es from './es';

const en: TranslationDictionary = {};

export const translations: Record<'en' | 'es', TranslationDictionary> = {en, es};
