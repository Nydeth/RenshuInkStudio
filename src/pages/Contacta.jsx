import Nav from "../components/Nav";
import "../cssComponents/main.css"
import Footer from "../components/Footer";
import FormularioContacto from "../components/FormularioContacto";
import usePageTitle from "../UsePageTitle";
export default function Contacta() {
  usePageTitle('Contáctanos');
return (
  <body>
  <body className="formBody">
    <Nav />
    <h1 className="formH1">Contacta con nosotros</h1>
    <FormularioContacto/>
    <Footer/>
    </body>
  </body>
);
}