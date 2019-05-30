import Swiper from 'swiper'
import "swiper/dist/css/swiper.css" 
import React from 'react'
import axios from 'axios'
import "../scss/swipper.scss"
export default class Banner extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      url: "https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1"
    };
  }
  componentDidMount(){
    axios.get(this.state.url).then((res) => {
      console.log(res.data)
      this.setState({
        list: res.data.Data.FloorInfo.ConfigHomeFloors[4].AdvInfo.AdvItems
      })
    })
  }
  componentDidUpdate(){
    var mySwiper = new Swiper('.swiper-container', {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:{
        delay:1000,
        disableOnInteraction:false
      }
    })        
  }
  render(){
    return <div id='swiper'>
        <div className="swiper-container">
          <div className="swiper-wrapper">{
            this.state.list.map(item => {
              return <div className="swiper-slide"><img src={item.PicUrl} /></div>
            })
          }
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
  }
}