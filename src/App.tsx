import { useState } from 'react'
import { Home } from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import {Teste} from "./pages/teste"
import { Dashboard } from './pages/dashboard';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />   
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />     
          <Route path='/teste' element={<Teste />} />       
        </Route>
      </Routes>
    </Router>
  )
}

export default App
