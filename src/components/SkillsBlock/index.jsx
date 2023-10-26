import React from "react"
import "./SkillsBlock.css"



function SkillsBlock({logoSrc, altText}) {
	return (
		<div className="skills-block">
			<img src={logoSrc} alt={altText} />
		</div>
	)
}

export default SkillsBlock
