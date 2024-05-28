import React from 'react'
import Nav from '../components/Nav'
import  Footer from '../components/Footer'
import usePageTitle from "../UsePageTitle";
import ImagenesBisuteria from '../components/ImagenesBisuteria'
import Anilladora from '../components/Artists/Anilladora'


export default function BisuteriaImg() {
  usePageTitle('Bisutería - Renshu Ink');
  return (
    <>
    <Nav />
    <section className='bisSection aniSec'>
    <h1 className='bisTitle'>Nuestra anilladora</h1>
      <div className="tats">
    <Anilladora />
    </div>
    </section>
    <section className='bisSection galSec'>
    <h1 className='bisTitle'>Bisutería</h1>
    <div className="container">
    <ImagenesBisuteria />
    </div>
    </section>
    <Footer className="bisFooter" />
    </>
  )
}
