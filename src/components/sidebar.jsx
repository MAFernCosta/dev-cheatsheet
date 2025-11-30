import { Link, NavLink } from 'react-router';
import "./sidebar.css";
import { useState, useEffect } from 'react';

function SideBar() {

    const jsonToFetch = "https://maferncosta.github.io/mycheatsheets/file.json";

    const PopulateSubMenu = ({ array }) => {

        if (array.length == 0)
            return (
                <li>
                    <span
                        class="link-body-emphasis d-inline-flex rounded ms-4"
                    >empty</span>
                </li>)
        return array.map(({ name, path }, index) =>
            <li key={index + name}>
                <Link
                    to={`mdcheatsheet/${btoa(path)}`}
                    
                    class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                >{name}</Link>
            </li>
        )
    }

    const PopulateMenu = () => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(jsonToFetch)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
        }, []);

        if (!data) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                {
                    data.category.map(({ name, files }, index) =>
                        <li class="mb-1" key={index + name}>
                            <button
                                class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${name}-collapse`}
                                aria-expanded="false"
                            >
                                {name}
                            </button>
                            <div class="collapse " id={`${name}-collapse`}>
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    {<PopulateSubMenu array={files} />}
                                </ul>
                            </div>
                        </li>
                    )}
            </div>
        );
    }

    return (
        <div className="flex-shrink-0 p-3 d-flex flex-column justify-content-between bg-white border-end side-bar z-index-1">
            <div className='mt-5'>
                <ul class="list-unstyled ps-0">
                    {
                        <li class="mb-1">
                            <Link class="link-body-emphasis d-inline-flex text-decoration-none rounded">Home</Link>
                        </li>
                    }
                    {<PopulateMenu />}

                </ul>
            </div>

        </div>
    )
}

export default SideBar