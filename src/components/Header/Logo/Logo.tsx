import { useEffect, useRef, useState } from "react";
import useGameContext from "context/GameContext";
import { GameStatus } from "context/gameTypes";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import lottieLogo from "./lottieLogo.json";

type AnimationSegment = [number, number];

function Logo() {
  const [{ gameStatus }] = useGameContext();
  // animationRunning is true while an animation is being played and prevents starting a next one until current is over
  const [animationRunning, setAnimationRunning] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const lastGameStatusValueRef = useRef<GameStatus | undefined>();

  useEffect(() => {
    // when the game starts
    if (gameStatus === GameStatus.IN_PROGRESS) animate(animationSegments.exit);
    //when the game ends
    else if (lastGameStatusValueRef.current === GameStatus.IN_PROGRESS)
      animate(animationSegments.enter);

    lastGameStatusValueRef.current = gameStatus;
  }, [gameStatus]);

  const animationSegments: Record<string, AnimationSegment> = {
    enter: [1, 46],
    exit: [55, 90],
    full: [55, 142],
  };

  // Config for the lottie animation
  const options = {
    animationData: lottieLogo,
    loop: false,
    autoplay: false,
    lottieRef: lottieRef,
    onComplete: () => {
      setAnimationRunning(false);
    },
    onDOMLoaded: () => animate(animationSegments.enter),
    style: {
      height: "100%",
      cursor: gameStatus === GameStatus.IN_PROGRESS || animationRunning ? "auto" : "pointer",
    },
    onClick: () => {
      if (gameStatus === GameStatus.IN_PROGRESS || animationRunning) return;
      else animate();
    },
  };

  // this function animates chosen segment or plays the whole animation
  // looks better at 1.5 speed
  function animate(segment?: AnimationSegment) {
    if (!lottieRef.current) return;

    setAnimationRunning(true);
    lottieRef.current.setSpeed(1.5);
    if (segment) {
      lottieRef.current.playSegments(segment, true);
    } else {
      lottieRef.current.playSegments(animationSegments.full, false);
    }
  }

  return <Lottie {...options} />;
}

export default Logo;