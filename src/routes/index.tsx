import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Store } from '../pages'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/lojinha" element={<Store />} />
    </Routes>
  </BrowserRouter>
)
