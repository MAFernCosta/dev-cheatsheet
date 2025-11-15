import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import {Outlet } from 'react-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import "bootstrap-icons/font/bootstrap-icons.css";
 
function App() {

  return (
    <>
      <Navbar />
      <main className='min-vh-100 mt-5 pt-4'>
        <Outlet/>
      </main>
      <Footer />
      
    </>
  )
}

export default App
