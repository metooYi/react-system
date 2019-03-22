import React from 'react'
import {NavLink} from 'react-router-dom'

class Menu extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            menus: props.menus
        }
    }

    render () {
        const items = this.props.menus.map((item, index) => {
            return (
                <div key={index}>
                    <NavLink exact to={item.path} activeClassName={'nav-active'}>{item.title}</NavLink>
                </div>
            )
        })
        if (items.length) {
            return (
                <div className={'menu'}>{items}</div>
            )
        }
        return null
    }
}

export default Menu
