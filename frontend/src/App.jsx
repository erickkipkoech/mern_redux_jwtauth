import { useState } from 'react';
import Header from './components/static/Header';
import { Outlet } from 'react-router-dom';

const App=()=> {

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
