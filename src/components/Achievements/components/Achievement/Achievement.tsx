import { AchievementData } from "components/Achievements/achievementsData";
import Toggle from "components/ui/Toggle/Toggle";

import * as Styled from './Achievement.styled';

interface AchievementProps {
  achievement: AchievementData,
  isCompleted: boolean,
  toggleCheat: () => void,
  isCheatEnabled: boolean,
  handleTab: (id: string) => void,
  isActive: boolean
}

const Achievement = ({ achievement, isCompleted, toggleCheat, isCheatEnabled, handleTab, isActive }: AchievementProps) => {
  function handleInput() {
    if (isCompleted) {
      toggleCheat();
    }
  }

  return (
    <Styled.Container onClick={() => handleTab(achievement.name)} $isActive={isActive}>
      <Styled.Label>
        <Styled.Name>{achievement.name}</Styled.Name>
        <Toggle checked={isCheatEnabled} onChange={handleInput} disabled={!isCompleted} />
      </Styled.Label>
      <Styled.Description $isActive={isActive}>
        {achievement.description}
      </Styled.Description>
    </Styled.Container>
  );
}

export default Achievement;