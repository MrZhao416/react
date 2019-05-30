import React,{ Component } from 'react';
import {connect} from 'react-redux'
import store from '../store/store';
import axios from 'axios'
class Home extends Component {
    constructor(props) {
        super(props)
    }
    // componentDidMount(){
    //     axios.get("https://api1.34580.com/wx/Products/BigCategoryRequest?sourcetype=9").then((res)=>{
    //         console.log(res.data);
    //     })
    // }
    render() {
        console.log(this.props.home)
        return (
            <h2>home</h2>
        )
    }
}

var mapState=(state)=>state;
export default connect(mapState)(Home);
