import './App.css'
import Home from './components/Home'
import Invoice from './components/Invoice'
import LogIn from './components/LogIn'
import ProductInfo from './components/ProductInfo'
import Register from './components/Register'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Stock from './components/Stock'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/productinfo' element={<ProductInfo/>}/>
        <Route path='/stock' element={<Stock/>}/>
      </Routes>
     

    </Router>
    </>
  )
}

export default App
