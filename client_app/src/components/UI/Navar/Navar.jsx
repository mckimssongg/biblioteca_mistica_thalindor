import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Navar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (        
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top ">
        
        <button className="btn btn-outline-secondary custom-toggler-icon" type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
        </button>

        <Collapse in={isOpen}>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-body">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/managePersonalLibrary">Gestionar Biblioteca</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Collapse>

        <div className="d-flex ms-auto align-items-center">
            <form className="d-flex me-5">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" name="search" style={{ width: '650px' }} />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>

            <Link to="/login" className="custom-nav-link">
                <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
        </div>

    </nav>
  );
}
