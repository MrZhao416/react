import axios from 'axios'
export default {
    getData() {
        return (dispatch) => {
            axios.get("https://api1.34580.com/sz/Products/ProductHotWordRequest?sourcetype=9").then((res) => {   
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
    
}