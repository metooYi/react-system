import React from 'react'

import Logo from './logo'

class Header extends React.Component {

    render () {
        return (
            <div className={'header'}>
                <Logo/>
                <ul className={'bar'}>
                    <li>首页</li>
                    <li>关于</li>
                    <li>我的</li>
                </ul>
            </div>
        )
    }
}

export default Header
