import { useState } from 'react'
import { Home } from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import {Faq} from "./pages/faq"
import { Dashboard } from './pages/dashboard';
import { IntegrantesPage } from './pages/integrantes';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} /> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />     
          <Route path='/faq' element={<Faq/>} />
          <Route path='/integrantes' element={<IntegrantesPage/>} />
        </Route>
      </Routes>
    </Router>
  )
} 

export default App
