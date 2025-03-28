import achievementsData from "./achievementsData";
import useGameContext from "context/GameContext";
import Button from "components/ui/Button/Button";
import Checkbox from "components/ui/Checkbox/Checkbox";
import Tooltip from "components/ui/Tooltip/Tooltip";
import List from "./components/List/List";
import { ReactComponent as Icon } from 'assets/close.svg';
import { useEffect, useState } from "react";
import { ActionType } from "context/gameReducer";
import { CheatsData } from "context/gameTypes";

import * as Styled from './Achievements.styled';

const tooltip = 'Check this option to unlock all achievements. Not chivalrous, but a comfortable move.';

const Achievements = () => {
  const [{ gameStatistics, activeCheats, easyMode }, dispatch] = useGameContext();
  const [mobilePopupOpen, setMobilePopupOpen] = useState(false);

  // close the popup on mobile devices when champion achievement get enabled, to show the prize
  // cleanup function prevents closing if the user just flickers the switch 
  useEffect(() => {
    if (activeCheats.prize) {
      const timeout = setTimeout(() => toggleMobilePopup(), 1500);

      return () => clearTimeout(timeout);
    }
  }, [activeCheats.prize])

  function toggleMobilePopup() {
    setMobilePopupOpen(prevValue => !prevValue)
  }

  function toggleEasyMode() {
    if (easyMode) {

      // when easy mode is turned off automatically disable cheats for achievements that were not completed
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

  const CloseButton = () => {
    return (
      <Styled.CloseButton onClick={toggleMobilePopup}>
        <Icon />
      </Styled.CloseButton>
    )
  }

  return (
    <>
      <Styled.MobileOnlyElement>
        <Button onClick={toggleMobilePopup}>achievements</Button>
      </Styled.MobileOnlyElement>
      <Styled.Container $mobilePopupOpen={mobilePopupOpen}>
        <Styled.MobileOnlyElement>
          <CloseButton />
        </Styled.MobileOnlyElement>
        <Styled.Title>achievements</Styled.Title>
        <Styled.EasyModeWrapper>
          <Styled.EasyModeTitle>easy mode</Styled.EasyModeTitle>
          <Tooltip tip={tooltip} />
          <Checkbox checked={easyMode} onChange={toggleEasyMode} />
        </Styled.EasyModeWrapper>
        <List />
      </Styled.Container>
    </>
  );
}

export default Achievements;