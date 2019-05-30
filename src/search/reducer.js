var initState={
    list:[],
    keyword:[],
}

var reducer=(state=initState,action)=>{
    var newState={...state};
    if(action.type==='ADDLIST'){
        newState.list=action.list
    }
    if(action.type==='GETKEYWORD'){
        newState.keyword=action.keyword
    }
    return newState;
}

export default reducer;