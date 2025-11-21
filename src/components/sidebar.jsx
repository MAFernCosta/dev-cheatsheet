import { Link, NavLink } from 'react-router';
import "./sidebar.css";
import Footer from './footer';

const navbarItems = [
    {
        link: "/",
        name: "Home"
    },
    {
        link: "/linuxbash",
        name: "Linux bash"
    },
    {
        link: "/mdcheatsheet/SQL",
        name: "Mdcheatsheet"
    }
]

function SideBar() {
    return (
        <div class="flex-shrink-0 p-3 d-flex flex-column justify-content-between bg-white" style={{ width: "200px" }}>
            <div className='mt-5'>
                <ul class="list-unstyled ps-0">
                    {/*
                    <li class="mb-1">
                        <button
                            class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse"
                            aria-expanded="true"
                        >
                            Home
                        </button>
                        <div class="collapse show" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li>
                                    <a
                                        href="#"
                                        class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >Overview</a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >
                                        Updates
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                                    >Reports
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    */}
                    {navbarItems.map(({link, name}, index)=>
                    <li key={index} className="mb-1">
                        <Link className="link-body-emphasis d-inline-flex text-decoration-none rounded" to={link}>{name}</Link>
                    </li>
                    )}
                    
                </ul>
            </div>

        </div>
    )
}

export default SideBar