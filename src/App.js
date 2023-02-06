import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Content from './Pages/Content';
import Moviecontent from './Pages/Moviecontent';
import ProtectedRoute from './Hoc/ProtectedRoute';
import Editcontent from './Pages/Editcontent';
import Editcar from './Pages/Editcar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route element={<ProtectedRoute/>}>
         <Route path='/Content' element={<Content/>}/>
         <Route path='/Movie' element={<Moviecontent/>}/>
         <Route path='/Edit' element={<Editcontent/>}/>
         <Route path='/EditCars/:id' element={<Editcar/>}/>
         <Route/>
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;