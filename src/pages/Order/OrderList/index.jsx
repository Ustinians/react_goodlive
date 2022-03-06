import React, {useState,useEffect} from 'react';
import "./index.less";
import api from '../../../api';
import OrderListView from '../OrderListView';

export default function OrderList(props) {
  const [orderData,setOrderData] = useState([]);
  useEffect(() => {
    api.order({
      username: props.user.username
    }).then(res => {
      console.log(res.data);
      if(res.data.status === 200){
        console.log(res.data.result);
        setOrderData(res.data.result);
      }
    }).catch(error => {
      console.log(error);
    })
  },[])
  // console.log(orderData);
  return (
    <div className='order-list'>
      {
        orderData.length > 0 ? <OrderListView order={orderData} /> : <div>数据正在加载中...</div>
      }
    </div>
  )
}
