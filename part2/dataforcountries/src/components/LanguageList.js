import React from 'react'
import Language from './Language'


const LanguageList = ({languages}) => {
    return(
        <ul>
            {languages.map(lang => <Language key = {lang.iso639_1} language = {lang} />)}
        </ul>
    )
}

export default LanguageList