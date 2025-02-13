import React from 'react';
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LoginPage,SignupPage,Home} from "./Routes/routes.js";
import CreateProduct from './pages/createProduct.jsx';


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/createProduct' element={<CreateProduct/>}/>
            <Route path='/myProduct' element={<myProduct/>}/>

        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
