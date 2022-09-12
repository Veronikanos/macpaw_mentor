import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import React, {useState} from "react";

export default function Voting(props) {
	const [voted, setVoted] = useState(props.isVoted);

	function handleOnclickStatus(){
		if (voted === true){
			setVoted(false);
			console.log(voted);
		}
	}
	const navigate = useNavigate();
	return (
		<div>
			<button type="button" class="btn btn-warning" onClick={() => {navigate(-1); handleOnclickStatus();}}>Go back</button>
			{/* <button type="button" class="btn btn-warning" onClick={handleOnclickStatus}><Link to="/">Go back</Link></button> */}
			<h4>Show Voting page!</h4>
		</div>
	);

}