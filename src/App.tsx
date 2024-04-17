import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import Customer from './components/Customer'
import Example from './components/Example'
import Escos from './components/Escos'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          {/* <HeaderComponent /> */}
          <Routes>
            <Route path="/" element={<Customer/>} ></Route>
            <Route path='/escos' element={<Escos/>}></Route>
          </Routes>
        </BrowserRouter>
        {/* kjhgfds */}
      </div>
    </>
  )
}

export default App
