import React from "react"
import WorkBlock from "../../components/WorkBlock"
import "./Work.css"

import aquapocalypseImage from '../../assets/work-images/aquapocalypse-gameplay.jpg'
import newsWorldImage from '../../assets/work-images/news-world.jpg'
import pocketSynthImage from '../../assets/work-images/pocket-synth.jpg'
import streamBackerImage from '../../assets/work-images/stream-backer.jpg'
import weatherImage from '../../assets/work-images/weather.jpg'
import noteTakerImage from '../../assets/work-images/note-taker.jpg'

function Work() {
	const workCard = [
		{ 
			title: "stream backer",
			imageUrl: streamBackerImage,
			deployedUrl: "https://stream-backer-668b75ae5120.herokuapp.com/",	
			githubUrl: "https://github.com/pclambs/stream-backer",
		},
		{ 
			title: "aquapocalypse",
			imageUrl: aquapocalypseImage,
			deployedUrl: "https://npokrandt-aquapocalypse-2ae8235b1b2d.herokuapp.com/",	
			githubUrl: "https://github.com/npokrandt/aquapocalypse",
		},
		{ 
			title: "news world",
			imageUrl: newsWorldImage,
			deployedUrl: "https://ricadbur.github.io/world-news/",	
			githubUrl: "https://github.com/RicAdbur/world-news",
		},
		{ 
			title: "pocket synth",
			imageUrl: pocketSynthImage,
			deployedUrl: "https://pclambs.github.io/pocket-synth-pwa/",	
			githubUrl: "https://github.com/pclambs/pocket-synth-pwa",
		},
		{ 
			title: "weather app",
			imageUrl: weatherImage,
			deployedUrl: "https://pclambs.github.io/weather-app/",	
			githubUrl: "https://github.com/pclambs/weather-app",
		},
		{ 
			title: "note taker",
			imageUrl: noteTakerImage,
			deployedUrl: "https://pclambs.github.io/note-taker/",	
			githubUrl: "https://github.com/pclambs/note-taker",
		},

	]

	return (
		<div className="container">
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
		</div>
	)
}

export default Work