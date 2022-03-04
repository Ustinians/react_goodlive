import React, { Component } from 'react'
// 引入路由
import {NavLink} from "react-router-dom";
// 引入样式文件
import "./index.less"

export default class BottomNav extends Component {
  render() {
    return (
      <div className='nav-footer'>
        <ul className='clear-fix'>
            <li>
                <NavLink to="/" exact>
                    <i className='iconfont icon-home'></i>
                    首页
                </NavLink>
            </li>
            <li>
                <NavLink to="/life">
                    <i className='iconfont icon-trophy'></i>
                    生活服务
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop">
                    <i className='iconfont icon-shop'></i>
                    商城
                </NavLink>
            </li>
            <li>
                <NavLink to="/user">
                    <i className='iconfont icon-team'></i>
                    我的
                </NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
