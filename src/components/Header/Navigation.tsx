/** @jsxImportSource @emotion/react */
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Navigation only has links to two out of three existing routes, 
since linking to the current route makes no sense.

Navigation links are rendered by mapping over navLinks array,
based on routesArray.

While changing routes, UseEffect cycles the routesArray to 
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
    <nav css={{ display: "flex", gap: "10px" }}>
      {
        navLinks.map((link, index) =>
          <Link key={index} to={link.path}>{link.label}</Link>
        )
      }
    </nav>
  );
}

export default Navigation;