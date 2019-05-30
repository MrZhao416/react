import React,{ Component } from 'react';
import {connect} from 'react-redux'
import store from '../store/store';
import axios from 'axios'
import Banner from './swipper'
import Three from './three'

class Home extends Component {
    constructor(props) {
        super(props)
    }
<<<<<<< HEAD
    // componentDidMount(){
    //     axios.get("https://api1.34580.com/wx/Products/BigCategoryRequest?sourcetype=9").then((res)=>{
    //         console.log(res.data);
    //     })
    // }
=======
    componentDidMount(){
        axios.get("https://api1.34580.com/wx/Products/BigCategoryRequest?sourcetype=9").then((res)=>{
            // console.log(res.data);/
        })
    }
>>>>>>> 841194a99561f464229b7f328b809a346a65ed5a
    render() {
        console.log(this.props.home)
        return (
            <div id='home'>
                <div className='search'>
                    <span>苏州市</span>
                </div>
                <h2>home</h2>
                <Banner />
                <Three />
            </div>
            
        )
    }
}

var mapState=(state)=>state;
export default connect(mapState)(Home);
