import React from "react"
import ResumeDownloadLink from "../../components/ResumeDownloadLink"
import SkillsBlock from "../../components/SkillsBlock"
import "./Resume.css"

import abletonLogo from "../../assets/svg-logos/ableton-logo.svg"
import adobeIllustratorLogo from "../../assets/svg-logos/adobe-illustrator-logo.svg"
import adobePhotoshopLogo from "../../assets/svg-logos/adobe-photoshop-logo.svg"
import css3Logo from "../../assets/svg-logos/css3-logo.svg"
import html5Logo from "../../assets/svg-logos/html5-logo.svg"
import jsLogo from "../../assets/svg-logos/js-logo.svg"
import nodejsLogo from "../../assets/svg-logos/nodejs-logo.svg"
import reactLogo from "../../assets/svg-logos/react-logo.svg"
import procreateLogo from "../../assets/svg-logos/procreate-logo.svg"

function Resume() {
	return (
		<>
			<h2>resume</h2>
			<ResumeDownloadLink />
			<h3 className="proficiencies">proficiencies</h3>
			<div className="skills">
				<SkillsBlock logoSrc={html5Logo} alt="HTML5" />
				<SkillsBlock logoSrc={css3Logo} alt="CSS3" />
				<SkillsBlock logoSrc={jsLogo} alt="Javascript" />
				<SkillsBlock logoSrc={nodejsLogo} alt="Node Js" />
				<SkillsBlock logoSrc={reactLogo} alt="React" />
				<SkillsBlock logoSrc={abletonLogo} alt="Ableton Live" />
				<SkillsBlock logoSrc={procreateLogo} alt="Procreate" />
				<SkillsBlock logoSrc={adobeIllustratorLogo} alt="Adobe Illustrator" />
				<SkillsBlock logoSrc={adobePhotoshopLogo} alt="Adobe Photoshop" />
			
			</div>
		</>
	)
}

export default Resume
