import React from 'react'
import {NavLink} from 'react-router-dom'
// import NavBar from './navBar'

class Sidebar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            navBar: props.router,
            index: null
        }
        this.selectMenu = this.selectMenu.bind(this)
    }

    selectMenu (index) {
        this.props.onSelectMenu(index)
        this.setState({
            index
        })
    }

    render () {
        const navs = this.state.navBar.map((item, index) => {
            return (
                <div
                    key={index}
                    onClick={this.selectMenu.bind(this, index)}
                >
                    <NavLink to={item.path} activeClassName={'nav-active'}>{item.title}</NavLink>
                </div>
            )
        })
        return (
            <div className={'sidebar'}>
                {navs}
            </div>
        )
    }
}

export default Sidebar
