import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.tsx'
import About from './About.tsx'
import Features from './Features.tsx'
import Suscription from './Pricing.tsx'
import EmblaCarousel from './Testimonials.tsx'
import Help from './Help.tsx'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";


  
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <About />
    <Features />
    <Suscription />
    <EmblaCarousel />
    <Help />
  </React.StrictMode>,
)


