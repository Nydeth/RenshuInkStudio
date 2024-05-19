import Nav from "../components/Nav";
import "../cssComponents/main.css"
import Footer from "../components/Footer";
import Main from "../components/Main";
import usePageTitle from "../UsePageTitle";
import CookieNotification from "../components/CookieNotification";
export default function Inicio() {
usePageTitle('Inicio - Renshu Ink Studio');
return (
  <>
    <Nav />
    <CookieNotification />
    <Main />
    <Footer />
  </>
);
}