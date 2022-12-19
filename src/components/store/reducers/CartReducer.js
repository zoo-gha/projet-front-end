const initState = {
    products: JSON.parse(localStorage.getItem("products") || "[]")
};

export const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_CART_INFO":
            return { ...initState};
        case "ADD_TO_CART":
            localStorage.setItem("products", JSON.stringify(action.products));
            return {
                ...initState,
                products: action.products,
            };
        case "REMOVE_FROM_CART":
        case "CHANGE_QUANTITY":
            localStorage.setItem("products", JSON.stringify(action.products));
            return {
                ...initState,
                products: action.products,
            };
    
        case "CLEAR_CART":
            localStorage.setItem("products", JSON.stringify([]));
            return {
                ...initState,
                products: [],
            };
        default:
            return state;
        }
};


