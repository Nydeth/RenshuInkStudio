import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import usePageTitle from "../UsePageTitle";
import BibliotecaAitor from '../components/BibliotecaAitor';
import BibliotecaChal from '../components/BibliotecaChal';


export default function BibliotecaImg() {
  usePageTitle('Biblioteca');
  return (
    <>
    <Nav />
    <div className="container">
        <h1>Biblioteca de Imágenes</h1>
        <div>
            <h2>Imágenes de Aitor</h2>
            <BibliotecaAitor/>
        </div>
        <div>
            <h2>Imágenes de Chal</h2>
            <BibliotecaChal />
        </div>
    </div>
    <Footer/>
    </>
  )
}
