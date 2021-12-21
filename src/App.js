import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist'
import { CartProvider } from 'react-use-cart';

function App() {
  

  return (
    <>
      <GlobalStyles/>
      <StyledContainer>
        <Router>
            <CartProvider>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/watchlist" element={<Watchlist />} />
              </Routes>
            </CartProvider>
        </Router>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
  /* background: crimson; */
`

export default App;
