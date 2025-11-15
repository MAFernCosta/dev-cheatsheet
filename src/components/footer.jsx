import { Link } from 'react-router';

function Footer() {
    return (
        <footer
            class="d-flex flex-wrap justify-content-between align-items-center py-1 border-top bg-dark px-5"
        >
            <div class="col-md-4 d-flex align-items-center">
                <Link
                    href="/"
                    class="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
                    
                >
                    dev-cheatsheet
                </Link>
                <span class="mb-3 mb-md-0 text-white-50"> <small>by Miguel Costa</small> </span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3 text-white">
                    <a
                        href='https://github.com/MAFernCosta/'
                        className='btn btn-dark'
                    >
                        <i class="bi bi-github h3"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer