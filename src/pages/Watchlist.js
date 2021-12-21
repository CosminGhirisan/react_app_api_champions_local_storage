import React from 'react'
import styled from 'styled-components'
import { useCart } from 'react-use-cart'

//Components
import Navbar from '../components/Navbar'
import Champion from '../components/Champion'

const Watchlist = () => {
   const { items } = useCart();
   console.log(items)
   return (
      <StyledContainer>
         <Navbar />
         <StyledWrapperTwo>
            <StyledChampions>
               {items.map(champion => (
                  <Champion 
                  name={champion.name}
                  id={champion.id}
                  key={champion.id}
                  image={champion.image_url}
                  armor={champion.armor}
                  attackdamage={champion.attackdamage}
                  attackrange={champion.attackrange}
                  bigImage={champion.big_image_url}
                  hp={champion.hp}
                  mp={champion.mp}
                  champion={champion}
                  /> 
                  
               ))}
            </StyledChampions>
         </StyledWrapperTwo>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   background: linear-gradient(180deg, rgba(17,73,59,1) 0%, rgba(183,250,233,.3) 100%);
   height: 100vh;
`

const StyledWrapperTwo = styled.div`
   /* height: 100vh; */
   margin: 0 auto;
   padding: 10px 30px;
`

const StyledChampions = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`



export default Watchlist
