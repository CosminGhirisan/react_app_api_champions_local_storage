import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash} from 'react-icons/fa'
import Modal from './Modal'
import { useCart } from 'react-use-cart';

const Champion = ({name, image, open, bigImage, armor, attackdamage, attackrange,hp, mp, champion}) => {
   const [isOpen, setIsOpen] = useState(false);
   const { inCart, addItem, removeItem } = useCart();

   return (
   
         <StyledChampion>
            <p>{open}</p> 
            <StyledButton>
               <button onClick={() => setIsOpen(true)}>{name}</button>
            </StyledButton>
            <img src={image} alt={name} />
            <StyledWatch>
               {inCart(champion.id)
                  ? <FaEyeSlash size="30px" color="#eb1f41e1" onClick={() => removeItem(champion.id)}/>
                  : <FaEye size="30px" color="#eb1f41e1" onClick={() => addItem(champion)}/>
               }
            </StyledWatch>
            <Modal 
               open={isOpen} 
               onClose={() => setIsOpen(false)}
               name={name}
               bigImage={bigImage}
               armor={armor}
               attackdamage={attackdamage}
               attackrange={attackrange}
               hp={hp}
               mp={mp}
            />
         </StyledChampion>
   
   )
}

const StyledChampion = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   text-align: center;
   box-shadow: 2px 6px 10px rgba(0,0,0,.5);
   border-radius: 15px;
   overflow: hidden;
   background-color: #000;
   margin: 1rem;
   width: 200px;
   height: auto;
`
const StyledButton = styled.div`
   button{
      position: relative;
      display: inline-block;
      color: #fff;
      background: transparent;
      font-size: 22px;
      font-weight: bold;
      padding: 10px;
      border: none;
      cursor: pointer;
   }

   button::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 100%;
      height: 2px;
      background: currentColor;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 250ms ease-in;
   }

   button:hover::after{
      transform: scaleX(1);
      transform-origin: left;
   }

   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

const StyledWatch = styled.button`
   position: absolute;
   bottom: 10px;
   right: 10px;
   display: flex;
   vertical-align: middle;
   padding: 3px;
   background-color:#11493b99;
   border-radius: 50%;
   transition: transform 250ms ease;
   &:hover{
      transform: scale(1.1);
      cursor: pointer;
   }
   &:active{
      transform: scale(1);
   }
`

export default Champion;
