import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {NavBar} from "antd-mobile";
// 引入样式文件
import "./index.less";

class PubHeader extends Component {
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        const {title} = this.props;
        return (
        <div>
            <NavBar style={{background:"#ff5555",color:"#fff"}} onBack={this.goBack}>{title}</NavBar>
        </div>
        )
    }
}

export default withRouter(PubHeader);
