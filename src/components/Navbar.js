import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';


const Navbar = () => {
   const { totalUniqueItems } = useCart();
   console.log(totalUniqueItems)
   return (
      <StyledNavbar>
         <StyledLeft>
            <StyledLink to="/">
               chAMPs
            </StyledLink>
         </StyledLeft>
         <StyledRight>
            <StyledLink to="/watchlist">
               Watchlist
            </StyledLink>
            <StyledBadge>{totalUniqueItems}</StyledBadge>
         </StyledRight>
      </StyledNavbar>
   )
}

const StyledNavbar = styled.div`
   min-height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: #0f3f33;
   color: #fff;
   padding: 0 30px;
   `;

const StyledLeft = styled.div`
   font-weight: 900;
   letter-spacing: 1.5px;
   font-size: 18px;
   `;

const StyledRight = styled.div`
   position: relative;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: 1px;
   /* background: #faa; */
`;

const StyledBadge = styled.span`
   position: absolute;
   top: -10px;
   right: -15px;
   font-size: 9px;
   background: red;
   padding: 2px 4px;
   border-radius: 3px;
`;

const StyledLink = styled(NavLink)`
   text-decoration: none;
   color: #fff;
`;

export default Navbar;
