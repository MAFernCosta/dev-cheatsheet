import { Link, NavLink } from 'react-router';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark ps-4 py-2 fixed-top">
            <div className="d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand text-white" to="/">dev-cheatsheet</Link>

                </div>
                
            </div>
        </nav>
    )
}

export default Navbar