import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducer";
import { WishReducer } from "./WishReducer";

const rootReducer = combineReducers({
    products : ProductReducer,
    cart : CartReducer,
    wishList : WishReducer,
});
export default rootReducer;