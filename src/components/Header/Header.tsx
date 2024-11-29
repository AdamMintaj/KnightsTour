/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

import * as Styled from './Header.styled';

const Header = () => {
  return (
    <Styled.Container css={{ display: "flex", gap: "10px" }}>
      <Link to="/about">about</Link>
      <Link to="/">play</Link>
      <Link to="/howTo">how to play</Link>
    </Styled.Container>
  );
}

export default Header;