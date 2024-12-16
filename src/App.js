

import './App.css';

//import EmpHome from './components/EmpHome';

import Header from './components/Header';

import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddEmp from './components/AddEmp'

import GetEmp from './components/Test';
function App() {
  return (
      <>
         <BrowserRouter>
              <Header />
              <Routes>
                 
                  <Route path='/emplist' element={<GetEmp />}></Route>
                  <Route path='/addemp' element={<AddEmp />}></Route>
                  
              </Routes>
              <Footer />
          </BrowserRouter>
        </>
  );
}

export default App;
