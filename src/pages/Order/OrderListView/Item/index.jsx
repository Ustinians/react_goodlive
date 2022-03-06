import React, { useState } from 'react';
import "./index.less";
import { Button, Popup, TextArea } from "antd-mobile";

export default function Item(props) {
  const data = props.data;
  const [visible, setVisible] = useState(false);
  const clickHandle = () => {
    setVisible(true);
  }
  const submitComment = () => {
    // 提交评论
    setVisible(false);
    data.commentState = 2;
  }
  return (
    <div className='order-item-container clear-fix'>
      <div className='order-item-img float-left'>
        <img src={data.img} alt=""></img>
      </div>
      <div className='order-item-content'>
        <span>商户: {data.title}</span>
        <span>类型: {data.houseType}</span>
        <span>价格: {data.price}</span>
      </div>
      {
        data.commentState === 0 ?
          <div className='comment-btn'>
            <Button onClick={clickHandle} color='primary' fill="outline">去评价</Button>
          </div>
          :
          <div className='comment-btn'>
            <Button color='primary' fill="outline" disabled>已评价</Button>
          </div>
      }
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
          data.commentState = 1;
        }}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '30vh',
        }}
      >
        <div className='commenting' style={{backgroundColor:"#f5f7fa",padding:"10px",height:"196px"}}>
          <p style={{marginBottom:"10px"}}>请输入您的评价: </p>
          <TextArea placeholder='请输入您的评价' showCount style={{backgroundColor:"#fff"}}></TextArea>
          <Button onClick={submitComment} style={{margin:"10px",marginRight:"122px",fontSize:"15px",padding:"5px 20px"}} color='primary' fill="outline">提交评价</Button>
          <Button onClick={() => {setVisible(false)}} style={{margin:"10px",fontSize:"15px",padding:"5px 20px"}} color='primary' fill="outline">取消评价</Button>
        </div>
      </Popup>
    </div>
  )
}
