import Nav from "../Nav";
import { Routes, Route } from "react-router-dom"
import CategoryPage from "../pages/CategoryPage";
import CardPage from "../pages/CardPage";
import { useDispatch } from 'react-redux'
// import { fetchCategory } from "../../store/asyncAction/fetchCategory";
import { fetchCategory } from "../../store/slice/categorySlice";
import { useEffect } from "react";
import ProductsPage from "../pages/ProductsPage";
// import { fetchProducts } from "../../_store/asyncAction/fetchProducts";
import './style.css'
import CategoryProductPage from "../pages/CategoryProductPage";
import SingleProductPage from "../pages/SingleProductPage";
import { fetchProducts } from "../../store/slice/productsSlice";


function App() {

// const category = useSelector(state => state.category)

const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  },[])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<CategoryPage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/category/:category' element={<CategoryProductPage />} />
        <Route path='/:product/:id' element={<SingleProductPage />} />

      </Routes>

    
    </>
  );
}

export default App;


// создать страницы CategoryPage и CardPage 
// и добавить навигационное меню, которое позволяет переключаться между этими страницами

// 1) подключить redux и эти 4 категории указать как категории по умолчанию 
// 2) отобразить эти категории как на макете