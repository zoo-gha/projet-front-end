const initState = {
    products: JSON.parse(localStorage.getItem("products") || "[]")
};
export const WishReducer = (state = initState, action) =>{
    switch (action.type) {
        case "GET_WISH_LIST_INFO":
            return { ...initState };
        case "ADD_TO_WISH_LIST":
            localStorage.setItem("products", JSON.stringify(action.products));
            return {
                ...initState,
                products: action.products,
            };
        case "REMOVE_FROM_WISH_LIST":
            localStorage.setItem("products", JSON.stringify(action.products));
            return {
                ...initState,
                products: action.products,
            };
        case "CLEAR_WISH_LIST":
            localStorage.setItem("products", JSON.stringify([]));
            return {
                ...initState,
                products: [],
            };
    
        default:
            return state;
    }
}