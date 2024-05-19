import { EVENTS } from "./Consts";
import { useState, useEffect } from "react";

 export function Router({ routes = [], DefaultComponent = () => <h1>404 <p>Pagina no encontrada, revise la ruta introducida</p></h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname); // Esto nos permite obtener el path actual del sitio web, y lo guardamos en un estado que ReactJS
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
      };
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.addEventListener(EVENTS.POPSTATE, onLocationChange);
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
      };
    }, []);
  
    const Page = routes.find(({ path }) => path === currentPath)?.component;
    return Page ? <Page /> : <DefaultComponent />;
  }