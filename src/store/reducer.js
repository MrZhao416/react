import {combineReducers} from 'redux'
import HomeReducer from '../home/reducer'
import CartReducer from '../cart/reducer'
import CatageryReducer from '../catagery/reducer'
import SelfReducer from '../self/reducer'


var reducer= combineReducers({
    home:HomeReducer,
    cart:CartReducer,
    catagery:CatageryReducer,
    self:SelfReducer
})

export default reducer;