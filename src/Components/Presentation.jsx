import { useEffect, useState } from 'react'
import { Header, Container, SvgContainer } from '../Styles/PresentationStyles'
import { useTranslation } from 'react-i18next'

const Presentation = () => {
    const [t] = useTranslation('presentation')
    const [inEffect, setInEffect] = useState('-100%')
    useEffect(() => {
        setInEffect('0')
    }, [])

    return (
        <Header>
            <Container>
                <SvgContainer>
                    <svg style={{ bottom: inEffect }} viewBox="-20 -50 520 400">
                        <g className='blur'>
                            <path d="M483.38,225.17a93.24,93.24,0,0,1-93.29,93.3H170.54A93.31,93.31,0,0,1,81,251.41h89.55a26.24,26.24,0,0,0,0-52.47H134.29a93.34,93.34,0,0,1-89.55-67.06h89.55a26.24,26.24,0,0,0,0-52.47H98.42A92.86,92.86,0,0,1,49.9,65.82a93.45,93.45,0,0,1-41-53.47H134.29a93.31,93.31,0,0,1,84.46,133,93.36,93.36,0,0,1,41.33,106.1h130a26.24,26.24,0,0,0,0-52.47H353.84l-.08,0-1.83,0a93.3,93.3,0,0,1,0-186.59H462.42A93.2,93.2,0,0,1,432.21,58.1a91.56,91.56,0,0,1-10.82,7.72,92.86,92.86,0,0,1-48.52,13.59H351.93a26.24,26.24,0,0,0,0,52.47h38.16a93.2,93.2,0,0,1,93.29,93.29Z" transform="translate(-8.87 -12.35)"/>
                        </g>
                        <g className='fill'>
                            <path d="M483.38,225.17a93.24,93.24,0,0,1-93.29,93.3H170.54A93.31,93.31,0,0,1,81,251.41h89.55a26.24,26.24,0,0,0,0-52.47H134.29a93.34,93.34,0,0,1-89.55-67.06h89.55a26.24,26.24,0,0,0,0-52.47H98.42A92.86,92.86,0,0,1,49.9,65.82a93.45,93.45,0,0,1-41-53.47H134.29a93.31,93.31,0,0,1,84.46,133,93.36,93.36,0,0,1,41.33,106.1h130a26.24,26.24,0,0,0,0-52.47H353.84l-.08,0-1.83,0a93.3,93.3,0,0,1,0-186.59H462.42A93.2,93.2,0,0,1,432.21,58.1a91.56,91.56,0,0,1-10.82,7.72,92.86,92.86,0,0,1-48.52,13.59H351.93a26.24,26.24,0,0,0,0,52.47h38.16a93.2,93.2,0,0,1,93.29,93.29Z" transform="translate(-8.87 -12.35)"/>
                        </g>
                        <g className='stroke'>
                            <path d="M483.38,225.17a93.24,93.24,0,0,1-93.29,93.3H170.54A93.31,93.31,0,0,1,81,251.41h89.55a26.24,26.24,0,0,0,0-52.47H134.29a93.34,93.34,0,0,1-89.55-67.06h89.55a26.24,26.24,0,0,0,0-52.47H98.42A92.86,92.86,0,0,1,49.9,65.82a93.45,93.45,0,0,1-41-53.47H134.29a93.31,93.31,0,0,1,84.46,133,93.36,93.36,0,0,1,41.33,106.1h130a26.24,26.24,0,0,0,0-52.47H353.84l-.08,0-1.83,0a93.3,93.3,0,0,1,0-186.59H462.42A93.2,93.2,0,0,1,432.21,58.1a91.56,91.56,0,0,1-10.82,7.72,92.86,92.86,0,0,1-48.52,13.59H351.93a26.24,26.24,0,0,0,0,52.47h38.16a93.2,93.2,0,0,1,93.29,93.29Z" transform="translate(-8.87 -12.35)"/>
                        </g>
                    </svg>
                </SvgContainer>
            </Container>
            <Container>
                <h1 style={{ bottom: inEffect }}>{t('title')}</h1>
            </Container>
            <Container>
                <p style={{ bottom: inEffect }}>{t('text')}</p>
            </Container>
        </Header>
    )
}

export default Presentation
