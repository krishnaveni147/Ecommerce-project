import {Routes, Route} from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/orderspage';

import './App.css'

function App() {
  

  return (
    <Routes>
      <Route index element = {<HomePage/>}/>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path='checkout' element = {<CheckoutPage/>}></Route>
      <Route path='orders' element = {<OrdersPage/>}></Route>
    </Routes>
    
  )
}

export default App
