import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as Styled from './Navigation.styled';

/* At any time Navigation has links to only two out of three existing routes, 
since linking to the current route makes no sense.

Navigation links are rendered by mapping over navLinks array,
based on routesArray.

While changing routes, useEffect cycles the routesArray to 
create the effect of target route and previous route links swapping
with the third link staying in its place. */

const routes = [
  {
    path: "/",
    label: "play"
  },
  {
    path: "/how-to",
    label: "how to play"
  },
  {
    path: "/about",
    label: "about"
  }
];

const Navigation = () => {
  const [routesArray, setRoutesArray] = useState(routes);
  const location = useLocation();

  useEffect(() => {
    setRoutesArray((prevRoutesArray) => {
      const newRoutesArray = [...prevRoutesArray];
      const targetIndex = newRoutesArray.findIndex(
        (link) => link.path === location.pathname
      );

      // when targetIndex cannot be found == trying to access a nonexistent route  
      if (targetIndex === -1) {
        return newRoutesArray;
      }

      // swapping first (current) route and target route in the array
      [newRoutesArray[0], newRoutesArray[targetIndex]] = [
        newRoutesArray[targetIndex],
        newRoutesArray[0],
      ];

      return newRoutesArray;
    });
  }, [location])

  // cut the first item (current route) from the array to render links
  const navLinks = routesArray.slice(1);

  return (
    <Styled.Container>
      {
        navLinks.map((link, index) =>
          <Styled.NavLink key={index} to={link.path}>{link.label}</Styled.NavLink>
        )
      }
    </Styled.Container>
  );
}

export default Navigation;