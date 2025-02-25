import achievementsData from "./achievementsData";
import Achievement from "./components/Achievement/Achievement";
import useGameContext from "context/GameContext";
import Button from "components/ui/Button/Button";
import List from "./components/List/List";
import { useState } from "react";
import { ActionType } from "context/gameReducer";
import { CheatsData } from "context/gameTypes";

import * as Styled from './Achievements.styled';

const Achievements = () => {
  const [{ gameStatistics, activeCheats, easyMode }, dispatch] = useGameContext();
  const [mobilePopupOpen, setMobilePopupOpen] = useState(false);

  function toggleMobilePopup() {
    setMobilePopupOpen(prevValue => !prevValue)
  }

  function toggleEasyMode() {
    if (easyMode) {

      // when turning off easy mode automatically disable cheats for achievements that were not completed
      let updatedActiveCheats: CheatsData = {
        ...activeCheats
      };

      achievementsData.forEach(achievement => {
        if (activeCheats[achievement.cheat] && !gameStatistics[achievement.validatedBy]) {
          updatedActiveCheats = { ...updatedActiveCheats, [achievement.cheat]: false }
        }
      })

      dispatch({ type: ActionType.TOGGLE_CHEAT, payload: updatedActiveCheats })
    }

    dispatch({ type: ActionType.TOGGLE_EASY_MODE })
  }

  function toggleCheat(cheat: keyof CheatsData) {
    const updatedActiveCheats: CheatsData = {
      ...activeCheats, [cheat]: !activeCheats[cheat]
    }
    dispatch({ type: ActionType.TOGGLE_CHEAT, payload: updatedActiveCheats })
  }

  return (
    <>
      <Button onClick={toggleMobilePopup}>achievements</Button>
      <Styled.Container $mobilePopupOpen={mobilePopupOpen}>
        <button onClick={toggleMobilePopup}>close</button>
        <Styled.Title>achievements</Styled.Title>
        <div>
          easy mode
          <input type='checkbox' checked={easyMode} onChange={toggleEasyMode} />
        </div>
        <List />
      </Styled.Container>
    </>
  );
}

export default Achievements;