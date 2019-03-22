import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
        this.state.items = props.items.map(item => {
            return (
                <li key={item.id}>
                    <Link to={item.path}>{item.title}</Link>
                </li>
            )
        })
    }
    render () {
        return (
            <ul className={'nav-item'}>
                {this.state.items}
            </ul>
        )
    }
}

export default NavBar