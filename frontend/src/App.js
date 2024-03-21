import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup.js';


function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
