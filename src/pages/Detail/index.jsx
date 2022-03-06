import React from 'react';
// 引入需要的路由相关
import {useParams} from "react-router-dom";
// 引入需要的组件
import DetailsView from './DetailsView';

export default function Detail(props) {
    const params = useParams();
  return (
    <div>
        <DetailsView id={params.id} />
        
    </div>
  )
}
