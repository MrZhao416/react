import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreate from './actionCreator'


class Catagarytjfl extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.getTjlist();
    }
   
    render() {
        let tjlist= this.props.catagery.tjlist;
        return <div>
            {
               tjlist.map((item) => {
                    return <div className="imgCon" key={item.Id}>
                        <img src={"http://picpro-sz.34580.com/wx/ImageUrl/" + item.PictureId + "/160.jpeg"} />
                        <span>{item.Name}</span>
                    </div>
                })
            }
        </div>
    }
}

var mapState = (state) => state;
var mapAction = (dispatch) => {
    return {
        getTjlist(){
            dispatch(actionCreate.getTjlist());
        }
    }
}
export default connect(mapState, mapAction)(Catagarytjfl);
