import { AchievementData } from "components/Achievements/achievements";

interface AchievementProps {
  achievement: AchievementData,
  isCompleted: boolean,
  toggleCheat: () => void,
  isCheatEnabled: boolean
}

const Achievement = ({ achievement, isCompleted, toggleCheat, isCheatEnabled }: AchievementProps) => {
  function handleInput() {
    if (isCompleted) {
      toggleCheat();
    }
  }

  return (
    <div className="achievement">
      <div className="achievement__label">
        <h3
          className="achievement__name"
        // onClick={() => props.handleItem(props.item.id)}
        >
          {achievement.name}
        </h3>
        <label className="switch" /*htmlFor={props.item.name}*/>
          <input
            className="switch__input"
            type="checkbox"
            // id={props.item.name}
            // checked={props.enabled}
            checked={isCheatEnabled}
            onChange={handleInput}
          />
          <span
          // className={
          //   props.completed
          //     ? "switch__toggle"
          //     : "switch__toggle switch__toggle--disabled"
          // }
          ></span>
        </label>
      </div>
      <div
      // className={
      //   props.isActive
      //     ? "achievement__description achievement__description--active"
      //     : "achievement__description"
      // }
      >
        {/* <p>{props.item.description}</p> */}
      </div>
    </div>
  );
}

export default Achievement;