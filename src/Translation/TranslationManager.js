import i18next from 'i18next'
import navbar_en from './En/navbar.json'
import navbar_es from './Es/navbar.json'
import presentation_es from './Es/presentation.json'

const languages = ['en', 'es']

const checkLanguage = lang => {
    let result = false
    languages.forEach(element => {
        if (lang.includes(element)) {
            result = element
        }
    })
    return result
}

const GetLanguage = () => {
    const storedLang = localStorage.getItem('lang')
    if (storedLang) {
        const lang = checkLanguage(storedLang)
        if (lang) return lang
    }

    const lang = checkLanguage(navigator.language)
    if (lang) return lang

    return languages[0]
}

i18next.init({
    interpolation: { escapeValue: false },
    lng: GetLanguage(),
    resources: {
        es: {
            navbar: navbar_es,
            presentation: presentation_es
        },
        en: {
            navbar: navbar_en
        },
    },
})


export { i18next }