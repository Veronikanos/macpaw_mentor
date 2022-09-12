import React, {useState} from "react";
// import {Outlet, Link} from 'react-router-dom';
import { Link } from 'react-router-dom';
import SecondPage from "./SecondPage";


export default function Homepage() {
	const [pressedButton, setPressedButton] = useState({voting: false, breeds: false, gallery: false});
	// console.log(pressedButton);


function renderVotingPage(event) {
	event.preventDefault();
	setPressedButton({voting: true});
	event.currentTarget.classList.add('active');

	// How to remove active class in two others buttons at the same time?

}

function renderBreedsPage(event) {
	event.preventDefault();
	setPressedButton({breeds: true});
	event.currentTarget.classList.add('active');
}

function renderGalleryPage(event) {
	event.preventDefault();
	setPressedButton({gallery: true});
	event.currentTarget.classList.add('active');
}

		return (
		<div className="row">
			<div className="col">
				<h2>Lets start using The Cat API</h2>
					<nav>
						<div className="btn-group" role="group" aria-label="Basic example">
						{/* <Link to="/votings" >VOTING</Link> */}
							<button type="button" className={'btn btn-primary'} onClick={renderVotingPage}><Link to="/votings">VOTING</Link></button>
							<button type="button" className={'btn btn-primary'} onClick={renderBreedsPage}>BREEDS</button>
							<button type="button" className={'btn btn-primary'} onClick={renderGalleryPage}>GALLERY</button>
						</div>
					</nav>
			</div>
			<div className="col">
				<SecondPage pressed={pressedButton}/>
			</div>
			{/* <Outlet /> */}
		</div>
		);
}