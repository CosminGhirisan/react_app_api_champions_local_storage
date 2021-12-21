import React, {useEffect, useState} from 'react'
import '../App.css'
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {loadChampions, loadSearchedChampions} from '../actions/championsAction'

//Components
import Navbar from '../components/Navbar'
import Search from '../components/Search';
import Champion from '../components/Champion'

const Home = () => {
   //Pagination
   const [pageNumber, setPageNumber] = useState(2)
   const changePage = ({selected}) => {
      setPageNumber(selected+1);
   }

   //Search
   const [searchTerm, setSeachTerm] = useState('');
   const searchHandler = (searchTerm) => {
      setSeachTerm(searchTerm)
   }

   //Fetch champions
   const dispatch = useDispatch();
   useEffect(() => {
      if(searchTerm){
         dispatch(loadSearchedChampions(searchTerm))
      } else {
         dispatch(loadChampions(pageNumber))
      }
   }, [pageNumber, searchTerm])

   const {champions} = useSelector(state => state.champions)
   const championsNew = champions.map(champion => {
      return {
         ...champion,
         price: "1"
      }
   })

   return (
      <StyledContainer>
         <Navbar />
         <StyledWrapperOne>
            <Search 
               searchKeyword = {searchHandler}
            />
         </StyledWrapperOne>
         <StyledWrapperTwo>
               <StyledChampions>
                  {championsNew.map(champion => (
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
            <ReactPaginate 
               previousLabel= {"Prev"}
               nextLabel = {'Next'}
               pageCount= {16}
               initialPage = {1}
               onPageChange= {changePage}
               containerClassName = {'paginationBtns'}
               disabledClassName= {'paginationDisabled'}
               activeClassName= {'paginationActive'}
               />
         </StyledWrapperTwo>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   background: linear-gradient(180deg, rgba(17,73,59,1) 0%, rgba(183,250,233,.3) 100%);
   height: 100vh;
`

const StyledWrapperOne = styled.div`
   position: relative;

   button{
      position: absolute;
      right: 30px;
      bottom: 8px;
      padding: 9px;
      border: 1px solid #0f3f33;
      border-radius: 5px;
      font-weight: bold;
      color: #0f3f33;
      cursor: not-allowed;
      background: #ffffff99;
      transition: transform 250ms ease-in;

      &:hover{
         transform: scale(1.05);
         background: #0f3f33;
         border: 1px solid #ffffff99;
         color: #ffffff99;
      }

      &:active{
         transform: scale(1);
      }
   }
`

const StyledWrapperTwo = styled.div`
   margin: 0 auto;
   padding: 10px 30px;
`

const StyledChampions = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   
`

export default Home;
