import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

import HeaderTop from './Home-Page-Components/HeaderTop'
import HeadLabel from '../src/assets/Home-Page-Assests/HeaderTopImages/logoCyber.png'
import Favorite from '../src/assets/Home-Page-Assests/HeaderTopImages/Favorites.png'
import Cart from '../src/assets/Home-Page-Assests/HeaderTopImages/Cart.png'
import User from '../src/assets/Home-Page-Assests/HeaderTopImages/User.png'

import Footer from './Home-Page-Components/Footer'
import facebookLogo from '../src/assets/Home-Page-Assests/FooterImages/Facebook.png'
import cyberLogo from '../src/assets/Home-Page-Assests/FooterImages/Logo.png'
import ınstagramLogo from '../src/assets/Home-Page-Assests/FooterImages/Instagram.png'
import tiktokLogo from '../src/assets/Home-Page-Assests/FooterImages/Tiktok.png'
import twitterLogo from '../src/assets/Home-Page-Assests/FooterImages/Twitter.png'

import ProductsPage from './Home-Page-Components/ProductsPage.jsx'

import ProductDetail from '../src/Product-Detail-Page/ProductDetail.jsx'

import BannerProducts from "./Home-Page-Components/BannerProducts.jsx"

import Home2 from '../src/Home-Page-Components/Home2.jsx'

import AllProducts from '../src/Home-Page-Components/AllProducts.jsx'

function App() {

  return (
    <>
      <Router>
        <HeaderTop cyberLogo={HeadLabel} likeLogo={Favorite} shopLogo={Cart} userLogo={User} />

        <Routes>

          <Route path='/' element={<Home2 />} />
          <Route path='/ProductsPage/:id' element={<ProductsPage />} />
          <Route path='/AllProducts' element={<AllProducts />} />
          <Route path='/BannerProducts/:idsi' element={<BannerProducts />} />
          <Route path='/ProductDetail/:idDetail' element={<ProductDetail />} />

        </Routes>

        <Footer logoCyber={cyberLogo} logoTwitter={twitterLogo} logoFacebook={facebookLogo} logoTiktok={tiktokLogo} logoInstagram={ınstagramLogo} />
      </Router>

    </>
  )

}

export default App
