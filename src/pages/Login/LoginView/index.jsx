import React, {useState} from 'react';
import {withRouter} from "react-router-dom"
import "./index.less";
import userUtils from "../../../utils/userUtils.js";
import storageUtils from "../../../utils/storageUtils";
import {Toast} from "antd-mobile";

function LoginView(props) {
  const [username,setUsername] = useState("");
  const [code,setCode] = useState("");
  const [clickCode,setClickCode] = useState(false);
  const changeUsername = (e) => {
    setUsername(e.target.value);
  }
  const changeCode = (e) => {
    setCode(e.target.value);
  }
  // 登陆
  const handleLogin = () => {
    if(username === userUtils.username && code === userUtils.code){
      Toast.show({
        icon: 'success',
        content: '登陆成功',
      })
      storageUtils.saveUser({
        username,
        code,
        collect: {}
      })
      props.history.goBack();
    }
    else{
      Toast.show({
        icon: 'fail',
        content: '手机号或验证码错误',
      })
    }
  }
  // 获取验证码
  const getCode = () => {
    // 如果手机号格式不正确,无法获取验证码
    if(username.length !== 11){
      Toast.show({
        content: '手机号格式不正确!'
      })
    }
    // 发送验证码,倒计时60s
    else{
      // 获取发送验证码的button
      let send = document.getElementById("sendcode");
      // 设计倒计时为60s,每隔1s,time--
      let time = 60;
      let timer = null; // 设置計時器
      // 设置"获取验证码"的按钮不可用
      setClickCode(true);
      // 开启计时器
      timer = setInterval(() => {
        time--;
        // 当倒计时结束
        if(time <= 0){
          // 恢复文字为获取验证码
          send.innerHTML = "获取验证码";
          send.style.color = "#ff5555";
          // 清除计时器
          clearInterval(timer);
          time = 60;
        }
        else{
          send.style.color = "#999";
          send.style.cursor = "auto";
          send.innerHTML = time + "s后发送";
        }
      },1000);
    }
  }
  return (
    <div id='login-container'>
      <div className='input-container phone-container'>
        <i className='icon-tablet'></i>
        <input
          type="text"
          placeholder='请输入手机号'
          value={username}
          onChange={changeUsername}
        />
      </div>
      <div className='input-container password-container'>
        <i className='icon-key'></i>
        <button id='sendcode' onClick={getCode} disabled={clickCode}>发送验证码</button>
        <input 
          type="text" 
          placeholder='请输入验证码'
          value={code}
          onChange={changeCode}  
        ></input>
      </div>
      <button className='btn-login' onClick={handleLogin}>登录</button>
    </div>
  )
}
export default withRouter(LoginView);