import { AchievementData } from "components/Achievements/achievementsData";
import Toggle from "components/ui/Toggle/Toggle";
import { memo } from "react";
import { CheatsData } from "context/gameTypes";

import * as Styled from './Achievement.styled';

interface AchievementProps {
  achievement: AchievementData,
  isCompleted: boolean,
  toggleCheat: (cheat: keyof CheatsData) => void,
  isCheatEnabled: boolean,
  handleTab: (id: string) => void,
  isActive: boolean
}

const Achievement = memo(({ achievement, isCompleted, toggleCheat, isCheatEnabled, handleTab, isActive }: AchievementProps) => {
  function handleInput() {
    if (isCompleted) {
      toggleCheat(achievement.cheat);
    }
  }

  return (
    <Styled.Container onClick={() => handleTab(achievement.name)} >
      <Styled.Label>
        <Styled.Name>{achievement.name}</Styled.Name>
        <Toggle checked={isCheatEnabled} onChange={handleInput} disabled={!isCompleted} />
      </Styled.Label>
      <Styled.Description $isActive={isActive}>
        {achievement.description}
      </Styled.Description>
    </Styled.Container>
  );
})

export default Achievement;