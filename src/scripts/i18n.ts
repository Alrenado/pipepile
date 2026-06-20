import ua from '../locales/ua.json'
import en from '../locales/en.json'

export type Lang = 'ua' | 'en'

const translations: Record<Lang, typeof ua> = { ua, en }

export function useTranslations(lang: Lang) {
    return function t(key: string): string {
        return key.split('.').reduce((obj: any, k) => obj?.[k], translations[lang]) ?? key
    }
}