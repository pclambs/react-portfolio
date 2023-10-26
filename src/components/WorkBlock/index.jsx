import React from 'react'
import './WorkBlock.css'

function WorkBlock ({ title, image, deployedUrl, githubUrl }) {
	return (
			<div className='work-block'>
				<img src={image} alt={title} />
				<h3>{title}</h3>
				<a 
					href={deployedUrl} 
					target="_blank" 
					rel="noopener noreferrer"
				>
					Deployed App
				</a>
				<a 
					href={githubUrl} 
					target="_blank" 
					rel="noopener noreferrer"
				>
					GitHub Repo
				</a>
			</div>
	)
}

export default WorkBlock