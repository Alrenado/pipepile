import type { Lang } from './i18n.ts'
import ua from '../locales/ua.json'
import en from '../locales/en.json'

const translations: Record<Lang, typeof ua> = { ua, en }

function getKey(obj: any, key: string): string {
    return key.split('.').reduce((o, k) => o?.[k], obj) ?? key
}

export function applyTranslations(lang: Lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n')!
        el.textContent = getKey(translations[lang], key)
    })
}

export function getCurrentLang(): Lang {
    return (localStorage.getItem('lang') as Lang) ?? 'ua'
}

export function setLang(lang: Lang) {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    applyTranslations(lang)
}