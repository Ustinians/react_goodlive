import React from 'react';
// 引入antd-mobile组件
import {NavBar} from "antd-mobile";
import UserInfo from './UserInfo';
import OrderList from './OrderList';

import storageUtils from '../../utils/storageUtils';

export default function Order(props) {
  const goBack = () => {
    props.history.goBack();
  }
  return (
    <div style={{backgroundColor:"rgb(241, 241, 241)"}}>
      <NavBar style={{backgroundColor:"#ff5555",color:"#fff"}} onBack={goBack}>订单详情</NavBar>
      <UserInfo />
      <OrderList user={storageUtils.getUser()} />
    </div>
  )
}
