import React, { useContext } from 'react'
import { FaFacebook, FaTwitter, FaWordpress, FaYoutube } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <main className={theme}>
      <div className='footer border-top '>
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <img src="https://demothemedh.b-cdn.net/piizalian/wp-content/uploads/2021/03/logo-Black.svg" alt="" />
        </a>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 ">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-body-secondary">Copyright © 2020 Piizalian. All Rights Reserved</span>
            </div>
            <p>570 8th Ave, New York, NY 10018 United States</p>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebook /></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><FaTwitter /></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><FaWordpress /></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"><FaYoutube /></a></li>
            </ul>
          </footer>
        </div>
      </div>
    </main>

  )
}

export default Footer