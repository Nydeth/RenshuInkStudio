import React from 'react'
import Nav from '../components/Nav'
import  Footer from '../components/Footer'
import usePageTitle from "../UsePageTitle";
import ImagenesBisuteria from '../components/ImagenesBisuteria'
import Anilladora from '../components/Anilladora'


export default function BisuteriaImg() {
  usePageTitle('Bisutería');
  return (
    <>
    <Nav />
    <section className='bisSection'>
    <h1 className='bisTitle'>Nuestra anilladora</h1>
    <Anilladora />
    </section>
    <section className='bisSection'>
    <h1 className='bisTitle'>Bisutería</h1>
    <div className="container">
    <ImagenesBisuteria />
    </div>
    </section>
    <Footer />
    </>
  )
}
