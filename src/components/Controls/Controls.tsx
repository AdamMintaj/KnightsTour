import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import BackButton from "./components/BackButton/BackButton";
import Button from "components/ui/Button/Button";

// import "./Controls.scss";

function Controls() {
	const [{ }, dispatch] = useGameContext();

	function handleReset() {
		dispatch({ type: ActionType.RESET_GAME })
	}

	return (
		<aside className="controls">
			<Button onClick={handleReset}>reset</Button>
			<BackButton />
		</aside>
	);
}

export default Controls;