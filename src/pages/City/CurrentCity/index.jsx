import React, { Component } from 'react';
// 引入样式文件
import "./index.less"




export default class CurrentCity extends Component {
    state = {
        nowCity: {}
    }


    render() {
        const {city} = this.props;
        return (
        <div className='current-city'>
            <h2>当前城市: {city}</h2>
        </div>
        )
    }
}
