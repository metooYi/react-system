import React from 'react'
import {Route, Switch} from 'react-router-dom'

import GoodsList from '../views/goodsList'
import UserList from '../views/userList'
import GoodsAdd from '../views/goodsAdd'

class Main extends React.Component {

    render () {
        return (
            <div className={'main'}>
                <div className={'main-content'}>
                    <Switch>
                        <Route exact path={'/goods'} component={GoodsList}/>
                        <Route path={'/goods/add'} component={GoodsAdd}/>
                    </Switch>
                    <Switch>
                        <Route exact path={'/user'} component={UserList}/>
                        <Route path={'/user/detail'} component={null}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Main
