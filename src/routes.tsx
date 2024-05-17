import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'

import BurguersPage  from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizzas'
import BebidasPage from './pages/Main/Bebidas'
import SobremesasPage from './pages/Main/Sobremesas'

export function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<MainPage />}>
            <Route path='/' element={<BurguersPage />} />
            <Route path='Pizzas' element={<PizzasPage />} />
            <Route path='Bebidas' element={<BebidasPage />} />
            <Route path='Sobremesas' element={<SobremesasPage />} />
        </Route>
    </Routes>
  )
}
