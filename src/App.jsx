import { useLayoutEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'
import Footer from './Components/Footer/Footer';

function App() {
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
  
    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);
  
    return children;
  };

  return (
    <div className=''>
      <Router>
        <ScrollToTop>
          <Routes>

            {/* <Route exact path='/' element={<HomePage />} /> */}

            <Route exact path='/' element={<PortfolioPage />} />
          </Routes>

          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App;
