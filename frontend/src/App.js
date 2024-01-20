
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from "../src/Pages/Shop"
import Catogary from "../src/Pages/ShopCatogary"
import Product from "../src/Pages/Product"
import Cart from "../src/Pages/Cart"
import LoginSignup from "../src/Pages/LoginSignup"
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Catogary Catogary="men"/>}/>
      <Route path='/womens' element={<Catogary Catogary="women"/>}/>
      <Route path='/kids' element={<Catogary Catogary="kid"/>}/>
      
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
