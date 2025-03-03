import achievementsData from "./achievementsData";
import useGameContext from "context/GameContext";
import Button from "components/ui/Button/Button";
import Checkbox from "components/ui/Checkbox/Checkbox";
import Tooltip from "components/ui/Tooltip/Tooltip";
import List from "./components/List/List";
import { ReactComponent as Icon } from 'assets/close.svg';
import { useState } from "react";
import { ActionType } from "context/gameReducer";
import { CheatsData } from "context/gameTypes";

import * as Styled from './Achievements.styled';

const tooltip = 'Check this option to unlock all achievements. Not chivalrous, but a comfortable solution';

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

  const EasyModeSection = () => {
    return (
      <Styled.EasyModeWrapper>
        <Styled.EasyModeTitle>easy mode</Styled.EasyModeTitle>
        <Tooltip tip={tooltip} />
        <Checkbox checked={easyMode} onChange={toggleEasyMode} />
      </Styled.EasyModeWrapper>
    )
  }

  const CloseButton = () => {
    return (
      <Styled.CloseButton onClick={toggleMobilePopup}>
        <Icon />
      </Styled.CloseButton>
    )
  }

  return (
    <>
      <Button onClick={toggleMobilePopup}>achievements</Button>
      <Styled.Container $mobilePopupOpen={mobilePopupOpen}>
        <CloseButton />
        <Styled.Title>achievements</Styled.Title>
        <EasyModeSection />
        <List />
      </Styled.Container>
    </>
  );
}

export default Achievements;