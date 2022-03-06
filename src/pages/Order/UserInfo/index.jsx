import React from 'react';
import { withRouter } from 'react-router-dom';
import "./index.less";
import headImg from "../../../assets/images/headImg.jpg";
import { Tag, Space } from 'antd-mobile'

import storageUtils from "../../../utils/storageUtils";

function UserInfo(props) {
  const user = storageUtils.getUser();
  if (!user || !user.username) {
    props.history.push("/login");
  }
  return (
    <div className='userinfo-container'>
      <div className='head-picture'>
        <img alt='img' src={headImg}></img>
      </div>
      <div className='user-info'>
        <p>
          <i className='icon-user'></i>
          <span>{user.nickName}</span>
        </p>
        <p>
          <i className='icon-map-marker'></i>
          <span>{user.city}</span>
        </p>
        <Space>
          <Tag color='primary' fill='outline'>
            舒适
          </Tag>
          <Tag color='#87d068' fill='outline'>
            宜居
          </Tag>
          <Tag color='#108ee9' fill='outline'>
            采光好
          </Tag>
        </Space>

      </div>
    </div>
  )
}

export default withRouter(UserInfo);