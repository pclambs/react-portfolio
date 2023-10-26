import React from "react"
import WorkBlock from "../../components/WorkBlock"
import "./Work.css"

import aquapocalypseImage from '../../assets/work-images/aquapocalypse-gameplay.jpg'

function Work() {
	const workCard = [
		{ 
			title: "Aquapocalypse",
			imageUrl: "https://github.com/npokrandt/aquapocalypse/blob/main/public/assets/readme-pics/gameplay.png?raw=true",
			deployedUrl: "https://npokrandt-aquapocalypse-2ae8235b1b2d.herokuapp.com/",	
			githubUrl: "https://github.com/npokrandt/aquapocalypse",
		},
		{ 
			title: "News World",
			imageUrl: "https://github.com/RicAdbur/world-news/blob/main/assets/images/NewsWorldScreenshot.png?raw=true",
			deployedUrl: "https://ricadbur.github.io/world-news/",	
			githubUrl: "https://github.com/RicAdbur/world-news",
		},
		{ 
			title: "Aquapocalypse",
			imageUrl: aquapocalypseImage,
			deployedUrl: "https://npokrandt-aquapocalypse-2ae8235b1b2d.herokuapp.com/",	
			githubUrl: "https://github.com/npokrandt/aquapocalypse",
		},
		{ 
			title: "Aquapocalypse",
			imageUrl: aquapocalypseImage,
			deployedUrl: "https://npokrandt-aquapocalypse-2ae8235b1b2d.herokuapp.com/",	
			githubUrl: "https://github.com/npokrandt/aquapocalypse",
		},
		{ 
			title: "Aquapocalypse",
			imageUrl: aquapocalypseImage,
			deployedUrl: "https://npokrandt-aquapocalypse-2ae8235b1b2d.herokuapp.com/",	
			githubUrl: "https://github.com/npokrandt/aquapocalypse",
		},
		{ 
			title: "Aquapocalypse",
			imageUrl: aquapocalypseImage,
			deployedUrl: "https://npokrandt-aquapocalypse-2ae8235b1b2d.herokuapp.com/",	
			githubUrl: "https://github.com/npokrandt/aquapocalypse",
		},

	]

	return (
		<div className="work-section">
			<h2>work</h2>
			<div className="work-grid">
				{workCard.map((project, index) => (
					<WorkBlock
						key={index}
						title={project.title}
						image={project.imageUrl}
						deployedUrl={project.deployedUrl}
						githubUrl={project.githubUrl}
					/>
				))}
			</div>
		</div>
	)
}

export default Work