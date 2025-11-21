import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { Outlet } from 'react-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from './components/sidebar';

function App() {

  return (
    <>
      <div className='d-flex justibg-light'>
        <Navbar />
        <SideBar />
        <main className='min-vh-100 pt-4 mt-5'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
