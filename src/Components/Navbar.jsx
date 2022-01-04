import React from 'react'
import { Nav, Pink, Ul } from '../Styles/NavbarStyles'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [t, i18n] = useTranslation('navbar')

    console.log(t('navbar', { returnObjects: true }))

    const Translate = lang => {
        i18n.changeLanguage(lang)
        localStorage.setItem('lang', lang)
    }

    return (
        <Nav>
            <svg viewBox="-20 -50 520 400">
                <path d="M483.38,225.17a93.24,93.24,0,0,1-93.29,93.3H170.54A93.31,93.31,0,0,1,81,251.41h89.55a26.24,26.24,0,0,0,0-52.47H134.29a93.34,93.34,0,0,1-89.55-67.06h89.55a26.24,26.24,0,0,0,0-52.47H98.42A92.86,92.86,0,0,1,49.9,65.82a93.45,93.45,0,0,1-41-53.47H134.29a93.31,93.31,0,0,1,84.46,133,93.36,93.36,0,0,1,41.33,106.1h130a26.24,26.24,0,0,0,0-52.47H353.84l-.08,0-1.83,0a93.3,93.3,0,0,1,0-186.59H462.42A93.2,93.2,0,0,1,432.21,58.1a91.56,91.56,0,0,1-10.82,7.72,92.86,92.86,0,0,1-48.52,13.59H351.93a26.24,26.24,0,0,0,0,52.47h38.16a93.2,93.2,0,0,1,93.29,93.29Z" transform="translate(-8.87 -12.35)"/>
            </svg>
            <Ul>
                {Object.keys(t('navbar', { returnObjects: true })).map(e =>
                    <li key={`navbar-${e}`}>
                        <a href="">
                            <Pink>{t(`navbar.${e}`).charAt(0)}</Pink>
                            <span>{t(`navbar.${e}`).slice(1)}</span>
                        </a>
                    </li>
                )}
            </Ul>
        </Nav>
    )
}

export default Navbar
