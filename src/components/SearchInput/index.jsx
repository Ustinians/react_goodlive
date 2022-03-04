import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import "./index.less"

class SearchInput extends Component {
    state = {
        keywords: ""
    }
    keyUpHandle = (e) => {
        const {keywords} = this.state;
        if(keywords.length > 0){
            if(e.keyCode === 13){
                this.props.history.push(`/search?keywords=${keywords}`,keywords);
            }
        }
    }
    changeHandle = (e) => {
        this.setState({
            keywords: e.target.value
        })
    }
  render() {
      const {keywords} = this.state;
    return (
        <input 
            className='search-input' 
            type="text" 
            value={keywords}
            onKeyUp={this.keyUpHandle}
            onChange={this.changeHandle}
        />
    )
  }
}

export default withRouter(SearchInput);