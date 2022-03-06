import React from 'react';

// 引入需要的组件
import SearchList from './SearchList';
import SearchHeader from './SearchHeader';

export default function Search(props) {
    const keywords = props.location.state;
  return (
    <div>
        <SearchHeader search={keywords}></SearchHeader>
        <SearchList search={keywords}></SearchList>
    </div>
  )
}
