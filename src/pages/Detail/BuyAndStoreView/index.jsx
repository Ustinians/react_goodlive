import React from 'react';
import {withRouter} from "react-router-dom";
import "./index.less"
import storageUtils from '../../../utils/storageUtils';
import userUtils from '../../../utils/userUtils';
import {Toast} from "antd-mobile";

function BuyAndStoreView(props) {
  const handleCollection = () => {
    var user = storageUtils.getUser();
    var id = props.id;
    if(!user || !user.username){
      //还没有登陆
      props.history.push("/login");
    }
    else{
      // console.log(id);
      // user.collect[id.toString()] = true;
      // storageUtils.saveUser(user);
      if(!userUtils.collect[id]){
        userUtils.collect[id] = true;
        user.collect[id] = true;
        Toast.show({
          icon: 'success',
          content: '商品收藏成功!',
        })
      }
      else{
        if(user.collect[id] === true){
          user.collect[id] = !user.collect[id] ;
          userUtils.collect[id] = user.collect[id] ; 
          Toast.show({
            icon: 'fail',
            content: '商品已取消收藏!',
          })
        }
        else{
          user.collect[id] = !user.collect[id] ;
          userUtils.collect[id] = user.collect[id] ;     
          Toast.show({
            icon: 'success',
            content: '商品收藏成功!',
          })     
        }
      }
      storageUtils.saveUser(user);
    }
  }
  return (
    <div className='buy-store-container clear-fix'>
      <div className='item-container float-left'>
        {
          !userUtils.collect[props.id] ? <button className='selected' onClick={handleCollection}>收藏</button> 
          :
          <button className='selected o' onClick={handleCollection}>已收藏</button>
        }
      </div>
      <div className='item-container float-right'>
        <button className='selected'>购买</button>
      </div>
    </div>
  )
}

export default withRouter(BuyAndStoreView);