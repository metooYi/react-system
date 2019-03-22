import React, { Component } from 'react'
// import {Router, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import './system/style/index.css'
import Header from './system/components/header'
import Sidebar from './system/components/sidebar'
import Main from './system/components/main'
import Menu from './system/components/menu'

class App extends Component {
  constructor (props) {
      super(props)
      const router = [
          {
              id: 0,
              title: '商品',
              path: '/goods',
              children: [
                  {id: 1, title: '商品列表', path: '/goods'},
                  {id: 2, title: '商品详情', path: '/goods/detail'},
                  {id: 10, title: '商品添加', path: '/goods/add'}
              ]
          },
          {
              id: 3,
              title: '用户',
              path: '/user',
              children: [
                  {id: 4, title: '用户列表', path: '/user'},
                  {id: 5, title: '用户详情', path: '/user/detail'}
              ]
          },
          {
              id: 6,
              title: '设置',
              path: '/setting',
              children: [
                  {id: 7, title: '全局设置', path: ''},
                  {id: 8, title: '分类标签', path: ''},
                  {id: 9, title: '关于页面', path: ''}
              ]
          }
      ]
      this.state = {router, activeMenu: []}

      // 为声明的方法绑定this，这样方法里面才可以拿到this
      this.setActiveMenu = this.setActiveMenu.bind(this)
  }

  setActiveMenu (index) {
      this.setState({
          activeMenu: this.state.router[index].children
      })
  }


  render() {
    return (
        <Router>
            <div className="container">
                <Header/>
                <div className={'content'}>
                    <Sidebar router={this.state.router} onSelectMenu={this.setActiveMenu}/>
                    <Menu menus={this.state.activeMenu}/>
                    <Main/>
                </div>
            </div>
        </Router>
    )
  }
}

export default App;
