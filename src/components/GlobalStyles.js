import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   html{
      &::-webkit-scrollbar{
         width: 0.5rem;
      }
      &::-webkit-scrollbar-thumb{
         background-color: darkgray;
      }
   }

   body {
      width: 100%;
   }

   h2{
      font-size: 3rem;
      color:#ff7676;
   }

   h3{
      font-size: 22px;
      padding: 10px;
   }

   p{
      font-size: 1.2rem;
      line-height: 200%;
      color: #696969;
   }

   a{
      text-decoration: none;
      /* color: #333; */
   }

   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.container {
  min-height: 100vh;
}

.paginationBtns {
  width: 80%;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
}

.paginationBtns a {
  padding: 6px;
  margin: 2px;
  border: 1px solid #0f3f33;
  border-radius: 5px;
  color: #0f3f33;
  cursor: pointer;
}

.paginationBtns a:hover {
  color: #fff;
  background-color: #0f3f33;
}

.paginationActive a {
  color: #fff;
  background-color: #0f3f33;
}

.paginationDisabled a {
  display: none;
}

`

export default GlobalStyles;
