import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import data from './components/data/data'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import NewArrivals from './components/NewArrivals'
import WomensCollection from './components/WomensCollection'
import MensCollection from './components/MensCollection'
import KidsCollection from './components/KidsCollection'
import SaleCollection from './components/Sale'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import AboutUs from './components/AboutUs'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import ShippingPolicy from './components/ShippingPolicy'
import RefundPolicy from './components/RefundPolicy'
import ShoppingCart from './components/ShoppingCart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-arrivals' element={<NewArrivals/>}/>
        <Route path='/womens-collection' element={<WomensCollection/>}/>
        <Route path='/mens-collection' element={<MensCollection/>}/>
        <Route path='/kids-collection' element={<KidsCollection/>}/>
        <Route path='/sales' element={<SaleCollection/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/terms-of-service' element={<TermsOfService/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/shipping-policy' element={<ShippingPolicy/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>
        <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        {/* <Route path="/trending/:productId" element={<ProductDetail/>}/> */}
      </Routes>
    </>
  )
}

export default App
