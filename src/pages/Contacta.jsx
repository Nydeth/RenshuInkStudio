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
    <h1 className="formH1">Contacta con nosotros</h1>
    <h2 className="formH2">Para pedir cita o cualquier otra consulta sobre un tatuaje rellena este formulario:</h2>
    <FormularioContacto/>
    <Footer/>
  </>
);
}