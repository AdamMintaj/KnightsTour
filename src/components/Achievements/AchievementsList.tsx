import achievements from "./achievements";
import { ActionType } from "context/gameReducer";
import useGameContext from "context/GameContext";
import Achievement from "./components/Achievement/Achievement";
import { CheatsData } from "context/gameTypes";

const AchievementsList = () => {
  const [{ gameStatistics, activeCheats, easyMode }, dispatch] = useGameContext();

  function toggleEasyMode() {
    if (easyMode) {

      // when turning off easy mode automatically disable cheats for achievements that were not completed
      let updatedActiveCheats: CheatsData = {
        ...activeCheats
      };

      achievements.forEach(achievement => {
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
    <aside className="achievements">
      <div>
        easy mode
        <input type='checkbox' checked={easyMode} onChange={toggleEasyMode} />
      </div>
      <div className="achievements__container">
        achievements list
        {achievements.map((achievement) => (
          <Achievement
            key={achievement.cheat}
            achievement={achievement}
            isCompleted={easyMode || gameStatistics[achievement.validatedBy] ? true : false}
            toggleCheat={() => toggleCheat(achievement.cheat)}
            isCheatEnabled={activeCheats[achievement.cheat]}
          />
        ))}
      </div>
    </aside>
  );
}

export default AchievementsList;