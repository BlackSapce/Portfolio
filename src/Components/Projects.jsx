import React from 'react'
import { useTranslation } from 'react-i18next'

const Projects = () => {
    const [t] = useTranslation('projects')

    return (
        <div>
            <h2>{t('title')}</h2>
            {Object.keys(t('projects', { returnObjects: true })).map((e, i) =>
                <div right={i % 2 === 0 ? true : false} key={e} >
                    <img src={`projects.${e}.img`} alt='project screenshot' />
                    <p>{`projects.${e}.desc`}</p>
                    <div>
                        <a href={`http://${t(`projects.${e}.links.github`)}`} target='_blank' rel='noopener noreferrer'>

                        </a>
                        <a href={`http://${t(`projects.${e}.links.demo`)}`} target='_blank' rel='noopener noreferrer'>
                            
                        </a>
                    </div>
                    <div>
                        {Object.keys(t(`projects.${e}.techs`, { returnObjects: true })).map(tech => 
                            <p key={`${e}-${tech}`}></p>  
                        )}
                    </div>
                </div>    
            )}
        </div>
    )
}

export default Projects
