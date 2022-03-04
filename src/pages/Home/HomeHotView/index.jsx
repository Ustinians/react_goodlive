import React, { Component } from 'react'
import "./index.less"

export default class HomeHotView extends Component {
  render() {
    const {data,title,city} = this.props;
    return (
      <div className='hotproduct'>
        <h3>{title}</h3>
        <div className='hot-container'>
          <ul className='clear-fix'>
            {
              data.map((item,index) => {
                return (
                  <li key={index}>
                    <a href={item.link}>
                      <img src={item.img} alt=""></img>
                      <span>{city + item.title}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
