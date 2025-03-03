import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import BackButton from "./components/BackButton/BackButton";
import Button from "components/ui/Button/Button";

import * as Styled from './Controls.styled';

function Controls() {
	const [{ }, dispatch] = useGameContext();

	function handleReset() {
		dispatch({ type: ActionType.RESET_GAME })
	}

	return (
		<Styled.Container>
			<Button onClick={handleReset}>reset</Button>
			<BackButton />
		</Styled.Container>
	);
}

export default Controls;