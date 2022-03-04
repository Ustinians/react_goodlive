import React from 'react'
import SearchList from './SearchList';

export default function Search(props) {
    const keywords = props.location.state;
  return (
    <div>
        搜索: {keywords}
        <SearchList search={keywords}></SearchList>
    </div>
  )
}
