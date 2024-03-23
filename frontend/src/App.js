import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/navbar/Topbar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Users from './pages/users/Users';
import Rooms from './pages/rooms/Rooms';
import Equipments from './pages/equipments/Equipments';
import Reservations from './pages/reservations/Reservations';
import Profile from './pages/profile/Profile';
import Setting from './pages/setting/Setting';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
   /* <BrowserRouter>
      <Routes>
        {/* Route pour la page Signup }
        <Route path='/signup' element={<Signup />} />
        {/* Route pour la page Signin }
        <Route path='/signin' element={<Login />} />

        {/* Routes pour les autres pages avec la décoration des thèmes }
       
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                <Sidebar isSidebar={isSidebar} />
                <main className="content">
                  <Topbar setIsSidebar={setIsSidebar} />
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    {/* Autres routes pour les pages avec la décoration des thèmes }
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  
      </Routes>
    </BrowserRouter>*/


    <div className="app">
    <BrowserRouter>
      <Sidebar />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </main>
    </BrowserRouter>
  </div>

  );
}

export default App;
