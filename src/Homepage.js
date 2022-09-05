import React, {useState} from "react";


function renderVotingPage(event) {
	event.preventDefault();
}

export default function Homepage() {
	return (
		<div>
			<h2>Lets start using The Cat API</h2>
			<div class="btn-group" role="group" aria-label="Basic example">
				<button type="button" class="btn btn-primary" onClick={renderVotingPage}>VOTING</button>
				<button type="button" class="btn btn-primary">BREEDS</button>
				<button type="button" class="btn btn-primary">GALLERY</button>
			</div>
		</div>
	);
}