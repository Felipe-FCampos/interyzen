// import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './App.css'
import Router from './routes'
import { useEffect } from 'react';

function App() {

  const Scroll = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname])

    return null
  }

  console.log("v5.8")

  return (
    <div>
      <Scroll />
      <Router />
    </div>
  )
}

export default App
