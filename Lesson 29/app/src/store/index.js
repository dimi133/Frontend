import { configureStore } from "@reduxjs/toolkit";
// import { categoryReducer } from "../_store/reducer/categoryReducer";
import  categoryReducer  from "./slice/categorySlice";
// import { productsReducer } from "../_store/reducer/productsReducer";
import productsReducer from "./slice/productsSlice";
import cardReducer from "./slice/cardSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        products: productsReducer,
        card: cardReducer
    }
}
)