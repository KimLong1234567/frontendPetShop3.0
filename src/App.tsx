
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutAdmin from './layout/layoutAdmin';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<LayoutAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
