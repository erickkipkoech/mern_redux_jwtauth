import { useState } from 'react';
import Header from './components/static/Header';
import { Outlet } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App=()=> {

  return (
    <>
    <Header/>
    <ToastContainer/>
    <Outlet/>
    </>
  )
}

export default App
