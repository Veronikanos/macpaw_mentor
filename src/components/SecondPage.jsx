import Voting from "./Voting";
import Breeds from "./Breeds";
import Gallery from "./Gallery";
// import {Routes, Route} from 'react-router-dom';

export default function SecondPage(props) {
	console.log(props);
	if (props.pressed.voting) {
	return (
		<Voting />
	// 	<Routes>
	// 	<Route path="/votings" element={<Voting />} />
	// </Routes>
		
	)
	} else if (props.pressed.breeds) {
		return (
			<Breeds />
		)
	} else if (props.pressed.gallery) {
			return (
		<Gallery />
	)
	} else {
		return (
		<p>Here is a picture</p>
	);
	}
}
