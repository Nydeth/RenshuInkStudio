import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from './Router';
import React, { Component } from "react";
import AboutPage from './pages/SobreNosotros';
import HomePage from './pages/Inicio';
import Chal from './pages/ChalPage';
import Aitor from './pages/AitorPage';
import ContactoPage from './pages/Contacta';
import Biblioteca from './pages/BibliotecaImg';
import Bisuteria from './pages/BisuteriaImg';
import Equipo from './pages/Equipo';

const appRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
    //private: true // en un futuro se puede hacer privado si no queremos que se vea hasta iniciar sesion como usuario o administrador.
  },
  {
    path: "/contacto",
    component: ContactoPage,
  },
  {
    path:'/biblioteca',
    component:Biblioteca,
  },
  {
    path:'/bio-chal',
    component:Chal,
  },
  {
    path:'/bio-aitor',
    component:Aitor,
  },
  {
    path:'/bisuteria',
    component:Bisuteria,
  },
  {
    path:'/equipo',
    component:Equipo,
  },
]
function App() {
  return (
    <main>
      <Router  routes={appRoutes} />
    </main>
  );
}

export default App;
