import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

import * as Styled from './Header.styled';

const Header = () => {

  return (
    <Styled.Container>
      <Logo />
      <Navigation />
    </Styled.Container>
  );
}

export default Header;