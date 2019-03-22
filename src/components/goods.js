import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import GoodsList from './goodsList'
import GoodsItem from './goodsItem'

class Goods extends React.Component {
    constructor (props) {
        super(props)
        this.match = props.match
    }
    render () {
        return (
            <div>
                <Link to={`${this.match.path}/goods-item`}>商品详情</Link>
                <Link to={`${this.match.path}/`}>商品列表</Link>
                <Switch>
                    <Route path={`${this.match.path}/goods-item`} component={GoodsItem}/>
                    <Route path={`${this.match.path}/`} component={GoodsList}/>
                </Switch>
            </div>
        )
    }
}
export default Goods
