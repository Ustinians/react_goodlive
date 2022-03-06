import React from 'react';
import Item from "./Item";

export default function OrderListView(props) {
  return (
    <div>{
        props.order.map((item,index) => {
            return <Item key={index} data={item}></Item>
        })
    }</div>
  )
}
