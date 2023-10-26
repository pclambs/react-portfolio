import React from "react"
import "./ResumeDownloadLink.css"

function ResumeDownloadLink() {
	return (
		<div className="resume-link">
			<a href="../../assets/Paul-Lambert-Resume.pdf" download="Paul-Lambert-Resume.pdf">
				download my resume
			</a>
		</div>
	)
}

export default ResumeDownloadLink;