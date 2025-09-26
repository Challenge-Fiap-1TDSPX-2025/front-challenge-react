import { useState } from 'react'
import { Home } from './pages/home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import {Faq} from "./pages/faq"
import { Dashboard } from './pages/dashboard';
import { IntegrantesPage } from './pages/integrantes';
import { EscolhaPerfil } from './pages/tipo-usuario';
import { PacienteDashboard } from './pages/paciente-page';
import { Contato } from './pages/contato';
import { NovoTicketPage } from './pages/novo-ticket';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} /> 
        <Route path='/login' element={<EscolhaPerfil/>} />
        <Route path='/paciente/dashboard' element={<PacienteDashboard/>} />
        <Route path='/paciente/tickets/novo' element={<NovoTicketPage/>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />     
          <Route path='/faq' element={<Faq/>} />
          <Route path='/integrantes' element={<IntegrantesPage/>} />
          <Route path='/contato' element={<Contato/>}/>
        </Route>
      </Routes>
    </Router>
  )
} 

export default App
