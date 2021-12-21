import React, { useRef } from 'react'
import styled from 'styled-components'

const Search = ({searchKeyword}) => {
   const inputEl = useRef('');

   const getSearchTerm = () => {
      searchKeyword(inputEl.current.value);
   }
   
   return (
      <StyledSearch >
         <input 
            ref={inputEl}
            type="text" 
            placeholder="Type a name..." 
            onChange={getSearchTerm}/>
      </StyledSearch>
   )
}

const StyledSearch = styled.div`
   height: 50px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   /* background-color: #0f3f33; */
   /* background-color: red; */
   & input{
      width: 50%;
      padding: 10px;
      border: 2px solid #0f3f33;
      border-radius: 10px;
      font-size: 13px;
   }
`

export default Search

