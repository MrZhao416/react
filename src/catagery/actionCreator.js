import axios from 'axios'
export default {
    getData() {
        return (dispatch) => {
            axios.get("https://api1.34580.com/wx/Products/BigCategoryRequest?sourcetype=9").then((res) => {   
            dispatch({
                    type:'ADDLIST',
                    list:res.data.Data
                })
            })

        }
    },
    getKeyword(){
        return (dispatch) => {
            axios.get("https://api1.34580.com/sz/productSearch/defaultKeyword?sourcetype=9").then((res) => {   
            dispatch({
                    type:'GETKEYWORD',
                    keyword:res.data.Data.keyword,
                })
            })

        }
    },
    getTjlist(){
        return (dispatch) => {
            axios.get("https://api1.34580.com/wx/Products/HotCategoryRequest?sourcetype=9").then((res) => {   
            dispatch({
                    type:'ADDTJLIST',
                    tjlist: res.data.Data.HotCategoryList,
                })
            })

        }
    }
}