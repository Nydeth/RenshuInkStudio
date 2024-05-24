import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ImagenesAitor from '../components/ImagenesAitor'
import usePageTitle from '../UsePageTitle'

export default function AitorPage() {
  usePageTitle('Aitor');
  return (
    <>
    <body className='bioBody'>
      <Nav />
      <div className="page-container">
        <h1 className='bioH1'>Sobre mí</h1>
        <h2 className='bioH2'>Aitor</h2>
        <div className="bio-container">
          <img className='profPic' src="src/assets/img/Tatuador1.jpeg" alt="Tatuador Aitor" />
          <p className='bioText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis asperiores dolores odio molestias quod, sunt doloribus maxime delectus cum nihil numquam eos ex inventore eveniet libero, quibusdam perferendis ut sequi.</p>
        </div>
        <div>
          <h3 className='bioH3'>Últimos trabajos</h3>
          <ImagenesAitor />
        </div>
      </div>
      <Footer />
    </body>
    </>
  );
}