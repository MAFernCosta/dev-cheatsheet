import { Link, NavLink } from 'react-router';

const navbarItems = [
    {
        link: "/",
        name: "Home"
    },
    {
        link: "/linuxbash",
        name: "Linux bash"
    }
]

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark container-fluid py-2 fixed-top">
            <div className="container d-flex justify-content-between flex-row-reverse">
                <div>
                    <Link className="navbar-brand text-white" to="/">dev-cheatsheet</Link>

                </div>
                <div>
                    <button className="nav-item dropdown navbar-toggler bg-white me-5">
                        <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </a>
                        <ul className="dropdown-menu">
                             {
                                navbarItems.map(({ link, name }, index) =>
                                    <li className="dropdown-item nav-item" key={index}>
                                        <Link className="nav-link py-2" to={link}>{name}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            {
                                navbarItems.map(({ link, name }, index) =>
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link text-light" to={link}>{name}</Link>
                                    </li>
                                )
                            }


                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar