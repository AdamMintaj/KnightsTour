import { useEffect, useRef } from "react";
import useGameContext from "context/GameContext";
import { ActionType } from "context/gameReducer";

import * as Styled from './Richard.styled';

/**
 * This component renders a div that is empty by default.
 * If the user has won three times (`gameStatistics.win3`) or enabled the easy mode the div has a hidden rickroll video in it.
 * Enabling the champion achievement (`activeCheats.prize`) shows and plays the video. Enjoy your prize!
 */
const Richard = () => {
  const [{ activeCheats, gameStatistics, easyMode }, dispatch] = useGameContext();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (activeCheats.prize) {
      video.muted = false;
      video.play().catch(error => handleError(error));

      return () => resetVideo(video);
    }
  }, [activeCheats.prize]);

  function handleError(error: any) {
    console.warn(error);
    dispatch({ type: ActionType.TOGGLE_CHEAT, payload: { prize: false } });
    // TODO: Add an alert once I have done the system
  }

  function resetVideo(video: HTMLVideoElement) {
    video.pause();
    video.muted = true;
    video.currentTime = 0;
  }

  const renderVideo = gameStatistics.win3 || easyMode;

  return (
    <Styled.Container>
      {renderVideo &&
        <Styled.Video
          ref={videoRef}
          $visible={activeCheats.prize}
          src="https://shattereddisk.github.io/rickroll/rickroll.mp4"
          loop
          muted
          preload="auto"
        />}
    </Styled.Container>
  );
}

export default Richard;