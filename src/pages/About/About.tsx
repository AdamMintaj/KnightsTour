import * as Styled from 'styles/TextContentPages.styled';

const About = () => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.Header>about</Styled.Header>

        <Styled.Question>alright... what’s all this, then?</Styled.Question>
        <Styled.Answer>
          This simple app is a project I made for my portfolio. If you loved it so much
          that you want to see the other things I made or if you found a terrible bug
          you'd like to report, you can continue{" "}
          <Styled.Link href="https://maliszewski.vercel.app/">here</Styled.Link>
          .
        </Styled.Answer>

        <Styled.Question>who are you?</Styled.Question>
        <Styled.Answer>
          My name is Adam and I’m a front-end developer. If you’d like to
          learn more about me, see my{" "}
          <Styled.Link href="https://maliszewski.vercel.app/">website</Styled.Link>
          .
        </Styled.Answer>

        <Styled.Question>so you made all this?</Styled.Question>
        <Styled.Answer>
          Yes, all of this is my own work, except for the chess knight icon, which I got
          from{" "}
          <Styled.Link
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </Styled.Link>{", "}
          and the game of chess, which was invented sometime around the 7th
          century in India. Also, if you’ve unlocked all the achievements,
          you will know that I owe some credit to{" "}
          <Styled.Link
            href="https://github.com/ShatteredDisk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ShatteredDisk
          </Styled.Link>{" "}
          and{" "}
          <Styled.Link
            href="https://github.com/alampros"
            target="_blank"
            rel="noopener noreferrer"
          >
            alampros
          </Styled.Link>
          .
        </Styled.Answer>
      </Styled.InnerContainer>
    </Styled.Container>
  )
}

export default About;