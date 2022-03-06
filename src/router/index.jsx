import React, { Component } from 'react'
// 引入路由相关
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
// 引入路由组件
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";
import City from "../pages/City"
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import Login from "../pages/Login"
import Order from "../pages/Order"
// 引入底部导航组件
import BottomNav from "../components/BottomNav";

export default class AppRouter extends Component {
  render() {
    return (
      <div className='app-router'>
          <Router>
              <Switch>
                  <Route path="/city" component={City}></Route>
                  <Route path="/search" component={Search}></Route>
                  <Route path="/details/:id" component={Detail}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/order" component={Order}></Route>
                  <Layout path="/">
                    {/* 底部导航组件 */}
                    <BottomNav></BottomNav>
                    <Switch>
                      <Route path="/" exact component={Home}></Route>
                      <Route path="/life"  component={LifeService}></Route>
                      <Route path="/shop"  component={Shop}></Route>
                      <Route path="/user"  component={User}></Route>
                    </Switch>
                  </Layout>
                  <Redirect to="/"></Redirect>
              </Switch>
          </Router>
      </div>
    )
  }
}
