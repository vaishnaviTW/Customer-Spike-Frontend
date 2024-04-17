import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Customer from './components/Customer'
import Escos from './components/Escos'
import EscoData from './components/EscoData'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          {/* <HeaderComponent /> */}
          <Routes>
            <Route path="/" element={<Customer/>} ></Route>
            <Route path='/escos' element={<Escos/>}></Route>
            <Route path='/odata' element={<EscoData/>}></Route>
          </Routes>
        </BrowserRouter>
        {/* kjhgfds */}
      </div>
    </>
  )
}

export default App
