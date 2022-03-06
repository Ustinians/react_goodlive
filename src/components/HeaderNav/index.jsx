import React from 'react';
import {Link} from "react-router-dom";
// 引入样式文件
import "./index.less";
import SearchInput from "../SearchInput";

export default function HeaderNav(props) {
  return (
    <div id='home-header' className='clear-fix'>
        <div className='home-header-left float-left'>
            <Link to="/city" style={{color:"#fff"}}>
                <span>{props.cityName}</span>
                <i className='icon-angle-down'></i>
            </Link>
        </div>
        <div className='home-header-right float-right'>
            <Link to="/order"><i className='iconfont icon-car'></i></Link>
        </div>
        <div className='home-header-middle'>
            <div className='search-container'>
                <i className='icon-search'></i>
                <SearchInput></SearchInput>
            </div>
        </div>
    </div>
  )
}
