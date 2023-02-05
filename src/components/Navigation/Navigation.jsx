import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavItem to='/'>Home</NavItem></li>
        <li><NavItem to='add'>Add Users</NavItem></li>
      </ul>
    </nav>
  );
};

const NavItem = styled(NavLink)`
text-decoration: none;
color: black;
&.active{
    color:red;
}
`