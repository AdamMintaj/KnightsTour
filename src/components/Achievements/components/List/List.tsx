import achievementsData from "components/Achievements/achievementsData";
import Achievement from "../Achievement/Achievement";
import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";
import { CheatsData } from "context/gameTypes";
import { useState } from "react";

import * as Styled from './List.styled';

const List = () => {
  const [{ gameStatistics, activeCheats, easyMode }, dispatch] = useGameContext();
  const [activeTab, setActiveTab] = useState<string | null>()

  function toggleCheat(cheat: keyof CheatsData) {
    const updatedActiveCheats: CheatsData = {
      ...activeCheats, [cheat]: !activeCheats[cheat]
    }
    dispatch({ type: ActionType.TOGGLE_CHEAT, payload: updatedActiveCheats })
  }

  function handleTab(name: string) {
    if (name === activeTab) setActiveTab(null);
    else setActiveTab(name);
  }

  return (
    <Styled.Container>
      {achievementsData.map((achievement) => (
        <Achievement
          key={achievement.cheat}
          achievement={achievement}
          isCompleted={easyMode || gameStatistics[achievement.validatedBy] ? true : false}
          toggleCheat={() => toggleCheat(achievement.cheat)}
          isCheatEnabled={activeCheats[achievement.cheat]}
          handleTab={handleTab}
          isActive={activeTab === achievement.name}
        />
      ))}
    </Styled.Container>
  );
}

export default List;