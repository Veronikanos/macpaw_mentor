import React, {useState} from "react";
import SecondPage from "./SecondPage";

export default function Homepage() {
	const [pressedButton, setPressedButton] = useState({voting: "false", breeds: "false", gallery: "false"});
	console.log(pressedButton);


function renderVotingPage(event) {
	event.preventDefault();
	setPressedButton.voting(true);
	// event.currentTarget.classList.toggle('active');
		// console.log(pressedButton);
}

function renderBreedsPage(event) {
	event.preventDefault();
	setPressedButton.breeds(true);
}

function renderGalleryPage(event) {
	event.preventDefault();
	setPressedButton.gallery(true);
}

		return (
		<div className="row">
			<div className="col">
				<h2>Lets start using The Cat API</h2>
					<div className="btn-group" role="group" aria-label="Basic example">
						<button type="button" className={'btn btn-primary'} onClick={renderVotingPage}>VOTING</button>
						<button type="button" className={'btn btn-primary'} onClick={renderBreedsPage}>BREEDS</button>
						<button type="button" className={'btn btn-primary'} onClick={renderGalleryPage}>GALLERY</button>
					</div>
			</div>
			<div className="col">
				<SecondPage pressedButton={pressedButton}/>
			</div>
		</div>
		);
}