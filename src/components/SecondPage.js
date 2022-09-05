import Voting from "./Voting";
import Breeds from "./Breeds";
import Gallery from "./Gallery";

export default function SecondPage(props) {
	// console.log(props.pressedButton.voting);
	if (props.pressedButton.voting) {
	return (
		<Voting />
	)
	} else if (props.pressedButton.breeds) {
		return (
			<Breeds />
		)
	} else if (props.pressedButton.gallery) {
			return (
		<Gallery />
	)
	} else {
		return (
		<p>Here is a picture</p>
	);
	}
}
