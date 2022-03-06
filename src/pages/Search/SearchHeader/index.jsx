import React from 'react';
import {withRouter} from "react-router-dom";
import "./index.less";
import SearchInput from "../../../components/SearchInput";

function SearchHeader(props) {
  const goBack = () => {
    props.history.goBack();
  }
  return (
    <div id='search-header' className='clear-fix'>
        <span className='back-icon float-left' onClick={goBack}>
            <i className='icon-chevron-left'></i>
        </span>
        <div className='input-container'>
            <i className='icon-serach'></i>
            <SearchInput search={props.search}></SearchInput>
        </div>
    </div>
  )
}

export default withRouter(SearchHeader)