import {combineReducers} from 'redux'
import HomeReducer from '../home/reducer'
import CartReducer from '../cart/reducer'
import CatageryReducer from '../catagery/reducer'
import SelfReducer from '../self/reducer'
import Search from '../search/reducer'


var reducer= combineReducers({
    home:HomeReducer,
    cart:CartReducer,
    catagery:CatageryReducer,
    self:SelfReducer,
    search:Search
})

export default reducer;