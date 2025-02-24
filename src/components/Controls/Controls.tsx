import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import BackButton from "./components/BackButton/BackButton";

// import "./Controls.scss";

function Controls() {
	const [{ }, dispatch] = useGameContext();

	function handleReset() {
		dispatch({ type: ActionType.RESET_GAME })
	}

	return (
		<aside className="controls">
			<button onClick={handleReset}>reset</button>
			<BackButton />
		</aside>
	);
}

export default Controls;