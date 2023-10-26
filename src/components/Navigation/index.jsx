import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
	const location = useLocation()
	
	return (
		<nav>
			<Link to="/" className={location.pathname === '/' ? 'active' : ''}>about</Link>
			<Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>work</Link>
			<Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>contact</Link>
			<Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>resume</Link>
		</nav>   
	)
}

export default Navigation