export const AddToWishList = (id)=>{
    return async (dispatch, getState) =>{
        let product = getState().products.products.find(
            (product) => product.id === id
        );
        let wishProducts = getState().wishList.products;
        if (wishProducts.length > 0) {
            let isThere = false;
            wishProducts = wishProducts.map((pro) => {
                if (pro.id === id) {
                    isThere = true;
                    alert("Ce produit est déjà ajouter à la liste préférer !!!")
                };
                return pro;
            })
            if (!isThere){
                product = { ...product};
                wishProducts = [...wishProducts, product];
            }
        }else {
            product = { ...product };
            wishProducts = [product];
        }
        dispatch({
            type: "ADD_TO_WISH_LIST",
            products: wishProducts,
        });
    }
};
export const removeFromWishlist = (_id) => {
    return async (dispatch, getState) => {
        let product = getState().wishList.products.find((product) => product.id === _id);

        if (product) {
            let products = getState().wishList.products.filter((pro) => pro.id !== _id);
            dispatch({
                type: "REMOVE_FROM_WISH_LIST",
                products,
            });
        }
    };  
};
export const clearWishList = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: "CLEAR_WISH_LIST",
        });
    };
};

