import React,{ Component } from 'react';
import {connect} from 'react-redux'
class Catagary extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h2>catagery</h2>
        )
    }
}

var mapState=(state)=>state;
export default connect(mapState)(Catagary);
