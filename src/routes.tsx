import { Route, Routes } from 'react-router-dom'

import Home from './components/home'
import Painel from './components/painel'
import Multimidia from './components/multimidia'
import Contato from './components/contact'

function Router() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panel" element={<Painel />} />
        <Route path="/multimedia" element={<Multimidia />} />
        <Route path="/contact" element={<Contato />} />
    </Routes>
  )
}

export default Router
