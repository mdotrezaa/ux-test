import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/main.css";
import { Header, HeaderProduct } from "./components/header";
import Product from "./pages/product/product";
import ProductDetail from "./pages/product/productDetail";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <Product />
              </>
            }></Route>
          <Route
            path='/product/:id'
            element={
              <>
                <HeaderProduct />
                <ProductDetail />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
