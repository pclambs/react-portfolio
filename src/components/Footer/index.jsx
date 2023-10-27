import React from "react"
import "./Footer.css"

import GithubIcon from '../../assets/svg-logos/github-icon-dark.svg'
import LinkedInIcon from '../../assets/svg-logos/linkedin.svg'
import SpotifyIcon from '../../assets/svg-logos/spotify.svg'

function Footer() {
  return (
    <footer>

      <div className="icon-container">

        {/* GitHub Icon */}
        <a 
          href="https://github.com/pclambs" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={GithubIcon} 
            alt="GitHub" 
            className="footer-icon" 
          />
        </a>

        {/* LinkedIn Icon */}
        <a 
          href="https://www.linkedin.com/in/pclambs" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={LinkedInIcon} 
            alt="LinkedIn" 
            className="footer-icon" 
          />
        </a>

        {/* Spotify Icon */}
        <a 
          href="https://open.spotify.com/artist/1Oeaej6FllBLaDcjOoabHq" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={SpotifyIcon} 
            alt="Spotify" 
            className="footer-icon" 
          />
        </a>

      </div>

      <p>&copy; pclambs {new Date().getFullYear()}</p>
    
    </footer>
  )
}

export default Footer