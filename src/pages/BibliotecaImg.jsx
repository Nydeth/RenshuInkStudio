import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import usePageTitle from "../UsePageTitle";
import BibliotecaAitor from '../components/BibliotecaAitor';
import BibliotecaChal from '../components/BibliotecaChal';
import ImagenesAitor from '../components/ImagenesAitor';


export default function BibliotecaImg() {
  usePageTitle('Biblioteca');
  return (
    <>
    <Nav />
        <div>
            <h2 className='pageTitle'>Imágenes de Aitor</h2>
            <ImagenesAitor/>
        </div>
        <div>
            <h2 className='pageTitle'>Imágenes de Chal</h2>
            <ImagenesAitor/>
        </div>
    <Footer/>
    </>
  )
}
