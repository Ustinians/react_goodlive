import React, {useState} from 'react'
import SearchListView from "../SearchListView"

export default function SearchList() {
    const [searchData,setSearchData] = useState();
  return (
    <div>
        <SearchListView></SearchListView>
    </div>
  )
}
