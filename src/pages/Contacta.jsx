import Nav from "../components/Nav";
import "../cssComponents/main.css"
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";
import usePageTitle from "../UsePageTitle";
export default function Contacta() {
  usePageTitle('Contáctanos');
return (
  <>
    <Nav />
    <h1>Contacta Con nosotros</h1>
    <p>Para pedir cita o cualquier otra consulta sobre un tatuaje rellena este formulario:</p>
    <FormularioContacto/>
    <Footer/>
  </>
);
}