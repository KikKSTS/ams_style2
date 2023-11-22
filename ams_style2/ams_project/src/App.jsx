import Home from "./Page/Home";

import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Nav from "./components/Navbar/Navbar";
import Starting from "./Page/Starting/Starting";
import Gpu from "./Page/GPU/Gpu";
import ASIC from "./Page/ASIC/ASIC";
import EarnMore from "./Page/EarnMore/EarnMore";
import AmsSpeed from "./Page/AmsSpeed/AmsSpeed";

import Footer from "./Page/components/Footer";
import Pricing from "./Page/Pricing/Pricing";
import Hardware from "./Page/Hardware/Hardware";
import Market from "./Page/Market/Market";
import AMSMining from "./Page/AMSMining/AMSMining";
// import './App.css'
import Miner from './Page/Miner/Miner';
import What_Mining from "./Page/What/What_Mining";


function App() {
 const baseurl = import.meta.env.VITE_BASE_URL

  return (
    <>
    <BrowserRouter basename={baseurl}>
   
     <Nav />

      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/starting' element={<Starting />}></Route>
          <Route path='/gpu' element={<Gpu />}></Route>
          <Route path='/mining' element={<ASIC/>}></Route>
          <Route path='/earn' element={<EarnMore/>}></Route>
          <Route path='/amsspeed' element={<AmsSpeed/>}></Route>
          <Route path='/miner' element={<Miner/>}></Route>
          <Route path='/price' element={<Pricing/>}></Route>
          <Route path='/hardware' element={<Hardware/>}></Route>
          <Route path='/Market' element={<Market/>}></Route>
          <Route path='/AMSMining' element={<AMSMining/>}></Route>
          <Route path='/WhatMining' element={<What_Mining/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  
    </>
  );
}

export default App;
