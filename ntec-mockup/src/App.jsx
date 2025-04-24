import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Orders from './pages/order-page/Orders'

function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/order' element={<Orders/>}/>
          </Routes>
    </BrowserRouter>
  )
}

export default App
