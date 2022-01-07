import i18next from 'i18next'
import navbar_es from './Es/navbar.json'
import navbar_en from './En/navbar.json'
import presentation_es from './Es/presentation.json'
import presentation_en from './En/presentation.json'
import aboutme_es from './Es/aboutme.json'
import aboutme_en from './En/aboutme.json'
import contactme_es from './Es/contactme.json'
import contactme_en from './En/contactme.json'
import projects_es from './Es/projects.json'
import projects_en from './En/projects.json'

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
            presentation: presentation_es,
            aboutme: aboutme_es,
            projects: projects_es,
            contactme: contactme_es,
        },
        en: {
            navbar: navbar_en,
            presentation: presentation_en,
            aboutme: aboutme_en,
            projects: projects_en,
            contactme: contactme_en,
        },
    },
})


export { i18next }