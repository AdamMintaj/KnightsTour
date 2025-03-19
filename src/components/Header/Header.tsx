import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

import * as Styled from './Header.styled';

const Header = () => {

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Logo />
        <Navigation />
      </Styled.InnerContainer>
    </Styled.Container>
  );
}

export default Header;