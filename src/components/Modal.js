import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';
import { FaHeart, FaMagic, FaHardHat, FaExpandArrowsAlt, FaGavel, FaRegWindowClose } from 'react-icons/fa'

export default function Modal({open, onClose, name, bigImage, armor, attackdamage, attackrange,hp, mp}) {
   if(!open) return null;

   return ReactDom.createPortal(
      <>
         <StyledOverlay />
         <StyledModal>
            <button onClick={onClose} >
                  <FaRegWindowClose size="30px" color="#eeeeee"/>
            </button>
            <img src={bigImage} alt="" />
            <StyledInfo>
               <h1>{name}</h1>
               <StyledWraper>
                  <p><FaHeart size="30px"/> <span>{hp}</span></p>
                  <p><FaMagic size="30px"/> <span>{mp}</span></p>
               </StyledWraper>
               <StyledWraper>
                  <p><FaHardHat size="30px"/> <span>{armor}</span></p>
                  <p><FaGavel size="30px"/> <span>{attackdamage}</span></p>
                  <p><FaExpandArrowsAlt size="30px"/> <span>{attackrange}</span></p>
               </StyledWraper>
            </StyledInfo>
         </StyledModal>
      </>,
      document.getElementById('portal')
   )
}

const StyledModal = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   background-color: #ffffffcc;
   border-radius: 5px;
   padding: 30px;
   z-index: 10;

   h1{
      text-align: center;
   }

   button{
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      align-items: center;
      border: 1px solid #0f3f33;
      border-radius: 5px;
      background: #0f3f3380;
      padding: 2px;
      cursor: pointer;
      transition: transform 250ms ease-in;

      &:hover{
         transform: scale(1.05);
      }

      &:active{
         transform: scale(1);
      }
   }
`

const StyledInfo = styled.div`
   position: absolute;
   bottom: 39px;
   left: 39px;
   width: 290px;
   padding: 10px;
   color: #fff;
   background: #a1595999;
   border-radius: 10px;

   p{
      color: #fff;
      display: flex;
      align-items: center;  
   }

   span{
      font-size: 25px;
      font-weight: bold;
      padding: 5px;
   }
`

const StyledWraper = styled.div`
   display: flex;
   justify-content: space-between;
`

const StyledOverlay = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: #33333399;
   z-index: 10;
`