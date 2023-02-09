import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ListMahasiswa from "./components/ListMahasiswa";
import AddMahasiswa from './components/AddMahasiswa';
import EditMahasiswa from './components/EditMahasiswa';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListMahasiswa/>}/>
        <Route path='/add' element={<AddMahasiswa/>}/>
        <Route path='/edit/:id' element={<EditMahasiswa/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
