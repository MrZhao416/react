import React,{ Component } from 'react';
import {connect} from 'react-redux'
import actionCreate from './actionCreator'
import axios from 'axios'
class Search extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
       this.props.getData();
       this.props.getKeyword();
    }
    render() {
        let keyword=this.props.catagery.keyword;
        let list=this.props.search.list;
        return (
            <div className="searchView">
                <div className="top-search">
                    <input type="text" placeholder={keyword}/>
                    <button>搜索</button>
                </div>
                <h2>
                    热门搜索
                </h2>
                <ul>
                    {
                        list.map((item)=>{
                            return (
                                <li key={item.id}>{item.HotWordName}</li>
                            )
                        })
                    }
                </ul>
                <h2>
                    最近搜索
                </h2>
            </div>
        )
    }
}

var mapState = (state) => state;
var mapAction = (dispatch) => {
    return {
        getData(){
            dispatch(actionCreate.getData());
        },
        getKeyword(){
            dispatch(actionCreate.getKeyword());
        }
    }
}
export default connect(mapState,mapAction)(Search);
