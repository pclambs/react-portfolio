import React from 'react'
import './WorkBlock.css'

import GithubIcon from '../../assets/svg-logos/github-icon.svg'

function WorkBlock ({ title, image, deployedUrl, githubUrl }) {
	const openLink = (url) => {
		window.open(url, '_blank', 'noopener noreferrer')
	}

	return (
			<div 
				onClick={() => openLink(deployedUrl)}
				className='work-block-link'
				role="button"
				tabIndex="0"
				onKeyDown={(e) => { if (e.key === 'Enter') openLink(deployedUrl); }}
			>	
			<div className='work-block'>
				<img src={image} alt={title} />
				<div className="work-info">
					<h3>{title}</h3>
					<div 
						className="repo-link"
						onClick={(e) => {
							e.stopPropagation() // Prevents triggering the outer onClick
							openLink(githubUrl)
						}}
						role="button"
						tabIndex="0"
						onKeyDown={(e) => { if (e.key === 'Enter') openLink(githubUrl); }}
					>
						<img src={GithubIcon} alt="GitHub Repo" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkBlock