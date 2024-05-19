import React from 'react'
import Nav from '../components/Nav'
import  Footer from '../components/Footer'
import usePageTitle from "../UsePageTitle";


export default function BisuteriaImg() {
  usePageTitle('Bisuteria');
  return (
    <>
    <Nav />
    <div className="container">
        <h1>Bisutería</h1>
    </div>
    <Footer />
    
    </>
  )
}
