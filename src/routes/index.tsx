import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, NSN, Store } from '../pages'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/lojinha">
        <Route path="" element={<Store />} />
        <Route path=":slug" element={<NSN />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
