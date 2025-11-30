import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from './components/sidebar';

function App() {

  return (
    <>
    <ScrollRestoration />
      <div className='d-flex bg-light w-100'>
        <Navbar />
        <SideBar />
        <div className='sidebarplace'></div>
        <main className='min-vh-100 pt-4 mt-5 container'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
