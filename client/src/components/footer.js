import React from "react";

function Footer() {
	return (
		<footer className="footer flex-row">
			<div className="text-center font-italic text-white">
                Disclaimer: "The DDAA is not responsible for any injury, maiming or death caused by the purchase of our dinosaurs. We are also not responsible for the events that could possibly lead to the dinosaurs escaping, breeding and threatening human civilization as we know it.""
            </div>

			<div className="text-center text-danger">
				<a  className="head-foot-a"
					href="https://github.com/jjakobsons87/dino-adoption"
					target="_blank"
					rel="noopener noreferrer"
				>
					Team Github
				</a>
			</div>
		</footer>
		
	)
}

export default Footer;