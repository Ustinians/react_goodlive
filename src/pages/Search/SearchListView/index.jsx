import React from 'react';
import Item from "./Item";

export default function SearchListView(props) {
  
  return (
    <div>
      {
        props.search.map((item,index) => {
          return <Item data={item} key={index}></Item>
        })
      }
    </div>
  )
}
