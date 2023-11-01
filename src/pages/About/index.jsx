import React from 'react'
import paulImg from '../../assets/paul.min.jpg'
import './About.css?ver=1.0.0'


function About() {
	return (
		<>
			<h2>about</h2>
			<div className="container">
				<div className='img-div'>
					<img src={paulImg} alt="Paul Lambert" className="about-paul" />
				</div>
				<div className="about-card">
					<h5>Full-Stack Web Developer</h5>
					<h4>Paul Lambert</h4>
					<p>Web Apps, Music Production, Graphic Design</p>
				</div>
			</div>
		</>
	)
}

export default About