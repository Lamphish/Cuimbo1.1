import React from 'react';
import Header from './components/Header';
import Playground from './components/Playground';
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './style.css'

export default function App(){
  return(
    <div>
      <Header />
      <Playground />
      <Sidebar />
    </div>
      
  )
}