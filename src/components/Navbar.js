import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import titleIcon from '../images/text-removebg-preview.png'


export default function Navbar(props) {
  const capitalizeWord = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'} shadow-md`}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    <img src={titleIcon} alt="Brand Logo" height="30" className="d-inline-block align-text-top me-2"/>
                    {props.title}
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center ms-3">
                        <div className={`form-check form-switch`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                {capitalizeWord(props.mode + " mode")}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set the title here',
    about: 'About'
}