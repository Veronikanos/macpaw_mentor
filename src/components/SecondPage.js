import Voting from "./Voting";
import Breeds from "./Breeds";
import Gallery from "./Gallery";

export default function SecondPage(props) {
	console.log(props);
	if (props.pressed.voting) {
	return (
		<Voting />
	)
	} else if (props.pressed.breeds) {
		return (
			<Breeds />
		)
	} else if (props.pressed.gallery) {
			return (
		<Gallery />
	)
	} else {  // This part doesn't work, I have no idea why
		return (
		<p>Here is a picture</p>
	);
	}
}
