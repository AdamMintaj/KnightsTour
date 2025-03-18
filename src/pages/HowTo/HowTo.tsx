import * as Styled from 'styles/TextContentPages.styled';

const HowTo = () => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.Header>how to play</Styled.Header>

        <Styled.Question>what is knight’s tour?</Styled.Question>
        <Styled.Answer>
          Knight’s tour is a chess puzzle in which you use the knight to
          cover the whole chessboard by visiting every square only once.
          If the final square is one step away from the square where the
          tour began then the tour is closed. Otherwise, the tour is open.
          If you end up on a square from which no further steps can be
          made you lose.
        </Styled.Answer>

        <Styled.Question>how does a chess knight move?</Styled.Question>
        <Styled.Answer>
          A chess knight moves two squares horizontally and one square
          vertically, or two squares vertically and one horizontally. To
          put it simpler, a path it takes is shaped like the letter L,
          rotated to your liking.
        </Styled.Answer>

        <Styled.Question>is that all?</Styled.Question>
        <Styled.Answer>
          well... yes, but actually no. To make the game more interesting
          I added extra goals which you can complete to make the game
          easier, more fun, get power-ups or even cheat. After completing
          an achievement you’ll get access to a perk that you’ll now be
          able to turn on and off at any time.
        </Styled.Answer>

        <Styled.Question>here’s a tip</Styled.Question>
        <Styled.Answer>
          Completing this puzzle may be a challenging task, unless you’re
          planning to google the solution or have an algorithm that will
          solve it for you. If neither of the above is true and you’re
          planning to find a solution on your own then it’s worth knowing
          the Warnsdorff's rule. In short, the rule states that the knight
          should always move to the square from which there are fewest
          next possible steps (excluding squares that have been already
          visited). It doesn’t guarantee 100% success but it works
          surprisingly well. Good luck!
        </Styled.Answer>
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default HowTo;