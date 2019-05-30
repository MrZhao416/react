import React from 'react'
import axios from 'axios'
import '../scss/three.scss'
export default class Three extends React.Component{
  constructor(props){
    super(props)
    this.state={
      url:'https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1',
      list:[], 
    }
  }
  componentDidMount(){
    axios.get(this.state.url).then( res => {
      this.state.list=res.data.Data;
      this.setState( {
        list: res.data.Data.FloorInfo.ConfigHomeFloors[5].PicAdvItems
      })
    })
  }
  render(){
    return <div id='three'>
      <div>
        {
          this.state.list.map(item => {
            return <img src={item.BackGroundImg} />
          })
        }
      </div>
      
    </div>
  }
}