import React from 'react'
import { useTranslation } from 'react-i18next'
import { Title, Container } from '../Styles/GeneralStyles'
import PinkUppercase from './PinkUpper'
import { P } from '../Styles/AboutMeStyles'

const AboutMe = () => {
    const [t] = useTranslation('aboutme')

    return (
        <Container>
           <Title>
               <PinkUppercase>
                    {t('title')}
               </PinkUppercase>
            </Title>
            {Object.keys(t('desc', { returnObjects: true })).map(e =>
                <P key={`desc-${e}`}>{t(`desc.${e}`)}</P> 
            )}
            <ul>
                {Object.keys(t('techs.recent', { returnObjects: true })).map(e =>
                    <li key={`techs-${e}`}>{t(`techs.recent.${e}`)}</li> 
                )}
            </ul>
        </Container>
    )
}

export default AboutMe
