import React from 'react'

import logoImage from '../static/image/logo.png'

class Logo extends React.Component {

    render () {
        return (
            <div className={'avatar'}>
                <img src={logoImage} alt=""/>
            </div>
        )
    }
}

export default Logo
