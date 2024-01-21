
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from "../src/Pages/Shop"
import Catogary from "../src/Pages/ShopCatogary"
import Product from "../src/Pages/Product"
import Cart from "../src/Pages/Cart"
import LoginSignup from "../src/Pages/LoginSignup"
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Catogary banner={men_banner} Catogary="men"/>}/>
      <Route path='/womens' element={<Catogary banner={women_banner} Catogary="women"/>}/>
      <Route path='/kids' element={<Catogary  banner={kid_banner} Catogary="kid"/>}/>
      
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>

      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
